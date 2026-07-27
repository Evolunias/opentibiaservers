import SeasonalStatusArgentinaKeywordPage, { generateMetadata } from './seasonal-status-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalStatusArgentinaKeywordPage />;
}
