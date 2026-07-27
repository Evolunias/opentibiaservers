import MarolaotSeasonalServerUkKeywordPage, { generateMetadata } from './marolaot-seasonal-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotSeasonalServerUkKeywordPage />;
}
