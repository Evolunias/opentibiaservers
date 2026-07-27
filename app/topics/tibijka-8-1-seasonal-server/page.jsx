import Tibijka81SeasonalServerKeywordPage, { generateMetadata } from './tibijka-8-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka81SeasonalServerKeywordPage />;
}
