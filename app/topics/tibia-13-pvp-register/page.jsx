import Tibia13PvpRegisterKeywordPage, { generateMetadata } from './tibia-13-pvp-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13PvpRegisterKeywordPage />;
}
