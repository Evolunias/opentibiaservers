import NtoStarSeasonalServerChileKeywordPage, { generateMetadata } from './nto-star-seasonal-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NtoStarSeasonalServerChileKeywordPage />;
}
