import Tibiascape96SeasonalServerKeywordPage, { generateMetadata } from './tibiascape-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape96SeasonalServerKeywordPage />;
}
