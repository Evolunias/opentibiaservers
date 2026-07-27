import Tibijka13SeasonalServerKeywordPage, { generateMetadata } from './tibijka-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka13SeasonalServerKeywordPage />;
}
