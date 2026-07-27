import Tibia86PvpRegisterKeywordPage, { generateMetadata } from './tibia-8-6-pvp-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86PvpRegisterKeywordPage />;
}
