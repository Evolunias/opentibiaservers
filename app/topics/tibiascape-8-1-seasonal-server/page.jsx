import Tibiascape81SeasonalServerKeywordPage, { generateMetadata } from './tibiascape-8-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape81SeasonalServerKeywordPage />;
}
