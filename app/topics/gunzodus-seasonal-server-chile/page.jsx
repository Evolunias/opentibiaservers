import GunzodusSeasonalServerChileKeywordPage, { generateMetadata } from './gunzodus-seasonal-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusSeasonalServerChileKeywordPage />;
}
