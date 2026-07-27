import Tibia11PvpEnforcedRegisterKeywordPage, { generateMetadata } from './tibia-11-pvp-enforced-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11PvpEnforcedRegisterKeywordPage />;
}
