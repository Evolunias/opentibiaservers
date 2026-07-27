import SeasonalStatusPolandKeywordPage, { generateMetadata } from './seasonal-status-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalStatusPolandKeywordPage />;
}
