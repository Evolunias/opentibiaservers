import Tibiascape86SeasonalServerKeywordPage, { generateMetadata } from './tibiascape-8-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape86SeasonalServerKeywordPage />;
}
