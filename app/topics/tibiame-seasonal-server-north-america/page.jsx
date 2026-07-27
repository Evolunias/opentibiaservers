import TibiameSeasonalServerNorthAmericaKeywordPage, { generateMetadata } from './tibiame-seasonal-server-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameSeasonalServerNorthAmericaKeywordPage />;
}
