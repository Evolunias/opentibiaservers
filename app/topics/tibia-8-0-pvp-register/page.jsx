import Tibia80PvpRegisterKeywordPage, { generateMetadata } from './tibia-8-0-pvp-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80PvpRegisterKeywordPage />;
}
