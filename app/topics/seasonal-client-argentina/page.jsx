import SeasonalClientArgentinaKeywordPage, { generateMetadata } from './seasonal-client-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalClientArgentinaKeywordPage />;
}
