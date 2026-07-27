import OriginaltibiaSeasonalServerChileKeywordPage, { generateMetadata } from './originaltibia-seasonal-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OriginaltibiaSeasonalServerChileKeywordPage />;
}
