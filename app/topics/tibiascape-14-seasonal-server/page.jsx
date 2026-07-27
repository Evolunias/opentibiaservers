import Tibiascape14SeasonalServerKeywordPage, { generateMetadata } from './tibiascape-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape14SeasonalServerKeywordPage />;
}
