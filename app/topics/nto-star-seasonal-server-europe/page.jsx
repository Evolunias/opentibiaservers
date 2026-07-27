import NtoStarSeasonalServerEuropeKeywordPage, { generateMetadata } from './nto-star-seasonal-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarSeasonalServerEuropeKeywordPage />;
}
