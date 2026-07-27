import GunzodusSeasonalServerBrazilKeywordPage, { generateMetadata } from './gunzodus-seasonal-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusSeasonalServerBrazilKeywordPage />;
}
