import SeasonalClientEuropeKeywordPage, { generateMetadata } from './seasonal-client-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalClientEuropeKeywordPage />;
}
