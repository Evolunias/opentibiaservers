import Tibiascape11SeasonalServerKeywordPage, { generateMetadata } from './tibiascape-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape11SeasonalServerKeywordPage />;
}
