import MarolaotSeasonalServerFranceKeywordPage, { generateMetadata } from './marolaot-seasonal-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotSeasonalServerFranceKeywordPage />;
}
