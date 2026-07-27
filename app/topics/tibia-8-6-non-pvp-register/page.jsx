import Tibia86NonPvpRegisterKeywordPage, { generateMetadata } from './tibia-8-6-non-pvp-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86NonPvpRegisterKeywordPage />;
}
