import TibiameSeasonalServerLatinAmericaKeywordPage, { generateMetadata } from './tibiame-seasonal-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameSeasonalServerLatinAmericaKeywordPage />;
}
