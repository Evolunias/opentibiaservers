import SeasonalStatusBrazilKeywordPage, { generateMetadata } from './seasonal-status-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalStatusBrazilKeywordPage />;
}
