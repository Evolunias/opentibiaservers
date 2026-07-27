import Tibijka14SeasonalServerKeywordPage, { generateMetadata } from './tibijka-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka14SeasonalServerKeywordPage />;
}
