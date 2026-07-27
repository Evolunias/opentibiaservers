import Tibiascape12SeasonalServerKeywordPage, { generateMetadata } from './tibiascape-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape12SeasonalServerKeywordPage />;
}
