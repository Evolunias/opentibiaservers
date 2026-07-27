import Tibiantis76SeasonalServerKeywordPage, { generateMetadata } from './tibiantis-7-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiantis76SeasonalServerKeywordPage />;
}
