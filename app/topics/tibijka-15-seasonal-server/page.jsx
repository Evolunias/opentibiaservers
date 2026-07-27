import Tibijka15SeasonalServerKeywordPage, { generateMetadata } from './tibijka-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka15SeasonalServerKeywordPage />;
}
