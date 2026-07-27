import Tibiascape76SeasonalServerKeywordPage, { generateMetadata } from './tibiascape-7-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape76SeasonalServerKeywordPage />;
}
