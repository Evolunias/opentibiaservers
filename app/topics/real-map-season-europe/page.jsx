import RealMapSeasonEuropeKeywordPage, { generateMetadata } from './real-map-season-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapSeasonEuropeKeywordPage />;
}
