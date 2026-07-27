import MarolaotSeasonalServerMexicoKeywordPage, { generateMetadata } from './marolaot-seasonal-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotSeasonalServerMexicoKeywordPage />;
}
