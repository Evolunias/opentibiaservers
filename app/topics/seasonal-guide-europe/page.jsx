import SeasonalGuideEuropeKeywordPage, { generateMetadata } from './seasonal-guide-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalGuideEuropeKeywordPage />;
}
