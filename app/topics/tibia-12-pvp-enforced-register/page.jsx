import Tibia12PvpEnforcedRegisterKeywordPage, { generateMetadata } from './tibia-12-pvp-enforced-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12PvpEnforcedRegisterKeywordPage />;
}
