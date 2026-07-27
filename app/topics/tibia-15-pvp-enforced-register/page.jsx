import Tibia15PvpEnforcedRegisterKeywordPage, { generateMetadata } from './tibia-15-pvp-enforced-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15PvpEnforcedRegisterKeywordPage />;
}
