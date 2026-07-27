import SeasonalStatusGermanyKeywordPage, { generateMetadata } from './seasonal-status-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalStatusGermanyKeywordPage />;
}
