import KasteriaSeasonalServerLatinAmericaKeywordPage, { generateMetadata } from './kasteria-seasonal-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaSeasonalServerLatinAmericaKeywordPage />;
}
