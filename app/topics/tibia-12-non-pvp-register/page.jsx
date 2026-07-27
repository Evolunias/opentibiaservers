import Tibia12NonPvpRegisterKeywordPage, { generateMetadata } from './tibia-12-non-pvp-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12NonPvpRegisterKeywordPage />;
}
