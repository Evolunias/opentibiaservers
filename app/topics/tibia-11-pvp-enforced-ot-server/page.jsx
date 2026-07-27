import Tibia11PvpEnforcedOtServerKeywordPage, { generateMetadata } from './tibia-11-pvp-enforced-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11PvpEnforcedOtServerKeywordPage />;
}
