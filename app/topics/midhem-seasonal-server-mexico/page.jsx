import MidhemSeasonalServerMexicoKeywordPage, { generateMetadata } from './midhem-seasonal-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemSeasonalServerMexicoKeywordPage />;
}
