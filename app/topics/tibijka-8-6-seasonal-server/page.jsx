import Tibijka86SeasonalServerKeywordPage, { generateMetadata } from './tibijka-8-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka86SeasonalServerKeywordPage />;
}
