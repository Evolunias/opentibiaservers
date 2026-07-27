import Tibia1098PvpRegisterKeywordPage, { generateMetadata } from './tibia-10-98-pvp-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098PvpRegisterKeywordPage />;
}
