import TibiascapeSeasonalServerLatinAmericaKeywordPage, { generateMetadata } from './tibiascape-seasonal-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeSeasonalServerLatinAmericaKeywordPage />;
}
