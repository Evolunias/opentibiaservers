import Tibia15PvpRegisterKeywordPage, { generateMetadata } from './tibia-15-pvp-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15PvpRegisterKeywordPage />;
}
