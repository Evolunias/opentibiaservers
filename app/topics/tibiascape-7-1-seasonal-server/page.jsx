import Tibiascape71SeasonalServerKeywordPage, { generateMetadata } from './tibiascape-7-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape71SeasonalServerKeywordPage />;
}
