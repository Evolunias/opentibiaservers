import Tibia81PvpRegisterKeywordPage, { generateMetadata } from './tibia-8-1-pvp-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81PvpRegisterKeywordPage />;
}
