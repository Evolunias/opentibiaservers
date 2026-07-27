import Tibijka84SeasonalServerKeywordPage, { generateMetadata } from './tibijka-8-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka84SeasonalServerKeywordPage />;
}
