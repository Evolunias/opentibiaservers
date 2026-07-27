import TibijkaSeasonalServerPolandKeywordPage, { generateMetadata } from './tibijka-seasonal-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaSeasonalServerPolandKeywordPage />;
}
