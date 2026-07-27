import PvpEnforcedOtmadnessServerKeywordPage, { generateMetadata } from './pvp-enforced-otmadness-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedOtmadnessServerKeywordPage />;
}
