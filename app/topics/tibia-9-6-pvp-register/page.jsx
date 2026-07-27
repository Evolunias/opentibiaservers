import Tibia96PvpRegisterKeywordPage, { generateMetadata } from './tibia-9-6-pvp-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96PvpRegisterKeywordPage />;
}
