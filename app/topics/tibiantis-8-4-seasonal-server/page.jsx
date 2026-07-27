import Tibiantis84SeasonalServerKeywordPage, { generateMetadata } from './tibiantis-8-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiantis84SeasonalServerKeywordPage />;
}
