import MarolaotSeasonalServerBrazilKeywordPage, { generateMetadata } from './marolaot-seasonal-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotSeasonalServerBrazilKeywordPage />;
}
