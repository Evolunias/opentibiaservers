import Tibia12PvpRegisterKeywordPage, { generateMetadata } from './tibia-12-pvp-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12PvpRegisterKeywordPage />;
}
