import Tibiascape100SeasonalServerKeywordPage, { generateMetadata } from './tibiascape-10-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape100SeasonalServerKeywordPage />;
}
