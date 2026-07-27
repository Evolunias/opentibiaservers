import Tibiascape80SeasonalServerKeywordPage, { generateMetadata } from './tibiascape-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape80SeasonalServerKeywordPage />;
}
