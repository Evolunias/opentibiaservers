import SeasonalStatusNorthAmericaKeywordPage, { generateMetadata } from './seasonal-status-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalStatusNorthAmericaKeywordPage />;
}
