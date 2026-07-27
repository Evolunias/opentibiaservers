import Tibia71NonPvpRegisterKeywordPage, { generateMetadata } from './tibia-7-1-non-pvp-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71NonPvpRegisterKeywordPage />;
}
