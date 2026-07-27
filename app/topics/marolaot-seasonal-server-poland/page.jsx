import MarolaotSeasonalServerPolandKeywordPage, { generateMetadata } from './marolaot-seasonal-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotSeasonalServerPolandKeywordPage />;
}
