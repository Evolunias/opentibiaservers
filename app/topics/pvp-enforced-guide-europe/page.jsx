import PvpEnforcedGuideEuropeKeywordPage, { generateMetadata } from './pvp-enforced-guide-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpEnforcedGuideEuropeKeywordPage />;
}
