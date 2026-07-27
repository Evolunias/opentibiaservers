import Tibia14PvpEnforcedOtServerKeywordPage, { generateMetadata } from './tibia-14-pvp-enforced-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14PvpEnforcedOtServerKeywordPage />;
}
