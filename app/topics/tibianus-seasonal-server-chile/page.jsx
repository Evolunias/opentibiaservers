import TibianusSeasonalServerChileKeywordPage, { generateMetadata } from './tibianus-seasonal-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusSeasonalServerChileKeywordPage />;
}
