import PvpEnforcedHarmoniaOtServerKeywordPage, { generateMetadata } from './pvp-enforced-harmonia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedHarmoniaOtServerKeywordPage />;
}
