import Tibia76PvpRegisterKeywordPage, { generateMetadata } from './tibia-7-6-pvp-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76PvpRegisterKeywordPage />;
}
