import Tibiantis15SeasonalServerKeywordPage, { generateMetadata } from './tibiantis-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiantis15SeasonalServerKeywordPage />;
}
