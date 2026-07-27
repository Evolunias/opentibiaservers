import Tibia11NonPvpRegisterKeywordPage, { generateMetadata } from './tibia-11-non-pvp-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11NonPvpRegisterKeywordPage />;
}
