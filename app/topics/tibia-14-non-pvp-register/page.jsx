import Tibia14NonPvpRegisterKeywordPage, { generateMetadata } from './tibia-14-non-pvp-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14NonPvpRegisterKeywordPage />;
}
