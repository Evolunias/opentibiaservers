import Tibijka12SeasonalServerKeywordPage, { generateMetadata } from './tibijka-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka12SeasonalServerKeywordPage />;
}
