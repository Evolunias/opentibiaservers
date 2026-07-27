import Tibia11PvpRegisterKeywordPage, { generateMetadata } from './tibia-11-pvp-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11PvpRegisterKeywordPage />;
}
