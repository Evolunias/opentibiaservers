import MidhemSeasonalServerEuropeKeywordPage, { generateMetadata } from './midhem-seasonal-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemSeasonalServerEuropeKeywordPage />;
}
