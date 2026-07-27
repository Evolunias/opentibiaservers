import NtoStarSeasonalServerGermanyKeywordPage, { generateMetadata } from './nto-star-seasonal-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarSeasonalServerGermanyKeywordPage />;
}
