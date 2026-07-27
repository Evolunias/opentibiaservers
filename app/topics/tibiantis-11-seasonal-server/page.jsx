import Tibiantis11SeasonalServerKeywordPage, { generateMetadata } from './tibiantis-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiantis11SeasonalServerKeywordPage />;
}
