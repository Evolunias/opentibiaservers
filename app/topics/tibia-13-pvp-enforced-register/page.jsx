import Tibia13PvpEnforcedRegisterKeywordPage, { generateMetadata } from './tibia-13-pvp-enforced-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13PvpEnforcedRegisterKeywordPage />;
}
