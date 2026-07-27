import Tibia14PvpRegisterKeywordPage, { generateMetadata } from './tibia-14-pvp-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14PvpRegisterKeywordPage />;
}
