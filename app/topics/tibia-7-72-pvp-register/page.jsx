import Tibia772PvpRegisterKeywordPage, { generateMetadata } from './tibia-7-72-pvp-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772PvpRegisterKeywordPage />;
}
