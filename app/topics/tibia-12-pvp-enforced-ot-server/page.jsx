import Tibia12PvpEnforcedOtServerKeywordPage, { generateMetadata } from './tibia-12-pvp-enforced-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12PvpEnforcedOtServerKeywordPage />;
}
