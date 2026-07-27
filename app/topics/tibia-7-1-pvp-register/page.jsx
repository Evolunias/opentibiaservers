import Tibia71PvpRegisterKeywordPage, { generateMetadata } from './tibia-7-1-pvp-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71PvpRegisterKeywordPage />;
}
