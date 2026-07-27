import MidhemSeasonalServerUkKeywordPage, { generateMetadata } from './midhem-seasonal-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemSeasonalServerUkKeywordPage />;
}
