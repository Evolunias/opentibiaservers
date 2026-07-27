import TibiameSeasonalServerEuropeKeywordPage, { generateMetadata } from './tibiame-seasonal-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameSeasonalServerEuropeKeywordPage />;
}
