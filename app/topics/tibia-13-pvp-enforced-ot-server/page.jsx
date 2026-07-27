import Tibia13PvpEnforcedOtServerKeywordPage, { generateMetadata } from './tibia-13-pvp-enforced-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13PvpEnforcedOtServerKeywordPage />;
}
