import SeasonalClientBrazilKeywordPage, { generateMetadata } from './seasonal-client-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalClientBrazilKeywordPage />;
}
