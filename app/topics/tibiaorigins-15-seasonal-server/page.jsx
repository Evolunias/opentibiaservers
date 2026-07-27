import Tibiaorigins15SeasonalServerKeywordPage, { generateMetadata } from './tibiaorigins-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiaorigins15SeasonalServerKeywordPage />;
}
