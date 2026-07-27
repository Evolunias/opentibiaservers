import Tibiantis86SeasonalServerKeywordPage, { generateMetadata } from './tibiantis-8-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiantis86SeasonalServerKeywordPage />;
}
