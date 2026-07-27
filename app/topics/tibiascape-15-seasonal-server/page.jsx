import Tibiascape15SeasonalServerKeywordPage, { generateMetadata } from './tibiascape-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape15SeasonalServerKeywordPage />;
}
