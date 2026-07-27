import ArcaniarlSeasonalServerGermanyKeywordPage, { generateMetadata } from './arcaniarl-seasonal-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlSeasonalServerGermanyKeywordPage />;
}
