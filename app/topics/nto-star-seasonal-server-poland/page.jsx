import NtoStarSeasonalServerPolandKeywordPage, { generateMetadata } from './nto-star-seasonal-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarSeasonalServerPolandKeywordPage />;
}
