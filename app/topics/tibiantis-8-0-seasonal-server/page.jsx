import Tibiantis80SeasonalServerKeywordPage, { generateMetadata } from './tibiantis-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiantis80SeasonalServerKeywordPage />;
}
