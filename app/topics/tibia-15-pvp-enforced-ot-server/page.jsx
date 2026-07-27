import Tibia15PvpEnforcedOtServerKeywordPage, { generateMetadata } from './tibia-15-pvp-enforced-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15PvpEnforcedOtServerKeywordPage />;
}
