import Tibiaorigins11SeasonalServerKeywordPage, { generateMetadata } from './tibiaorigins-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaorigins11SeasonalServerKeywordPage />;
}
