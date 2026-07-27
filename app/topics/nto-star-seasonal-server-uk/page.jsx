import NtoStarSeasonalServerUkKeywordPage, { generateMetadata } from './nto-star-seasonal-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarSeasonalServerUkKeywordPage />;
}
