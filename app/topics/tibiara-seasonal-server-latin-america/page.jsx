import TibiaraSeasonalServerLatinAmericaKeywordPage, { generateMetadata } from './tibiara-seasonal-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraSeasonalServerLatinAmericaKeywordPage />;
}
