import Tibia80NonPvpRegisterKeywordPage, { generateMetadata } from './tibia-8-0-non-pvp-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80NonPvpRegisterKeywordPage />;
}
