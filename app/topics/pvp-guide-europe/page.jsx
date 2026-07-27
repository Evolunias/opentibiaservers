import PvpGuideEuropeKeywordPage, { generateMetadata } from './pvp-guide-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpGuideEuropeKeywordPage />;
}
