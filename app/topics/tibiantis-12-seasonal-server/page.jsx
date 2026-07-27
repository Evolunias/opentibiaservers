import Tibiantis12SeasonalServerKeywordPage, { generateMetadata } from './tibiantis-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiantis12SeasonalServerKeywordPage />;
}
