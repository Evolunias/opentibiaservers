import Tibiantis81SeasonalServerKeywordPage, { generateMetadata } from './tibiantis-8-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiantis81SeasonalServerKeywordPage />;
}
