import Tibiaorigins14SeasonalServerKeywordPage, { generateMetadata } from './tibiaorigins-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaorigins14SeasonalServerKeywordPage />;
}
