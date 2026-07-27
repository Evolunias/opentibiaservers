import Tibijka80SeasonalServerKeywordPage, { generateMetadata } from './tibijka-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka80SeasonalServerKeywordPage />;
}
