import SeasonalStatusCanadaKeywordPage, { generateMetadata } from './seasonal-status-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalStatusCanadaKeywordPage />;
}
