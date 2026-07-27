import NepreniaSeasonalServerChileKeywordPage, { generateMetadata } from './neprenia-seasonal-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaSeasonalServerChileKeywordPage />;
}
