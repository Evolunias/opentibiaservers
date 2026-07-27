import TibiantisSeasonalServerEuropeKeywordPage, { generateMetadata } from './tibiantis-seasonal-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisSeasonalServerEuropeKeywordPage />;
}
