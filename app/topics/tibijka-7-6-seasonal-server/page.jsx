import Tibijka76SeasonalServerKeywordPage, { generateMetadata } from './tibijka-7-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka76SeasonalServerKeywordPage />;
}
