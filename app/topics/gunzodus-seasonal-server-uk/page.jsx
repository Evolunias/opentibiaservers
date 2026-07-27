import GunzodusSeasonalServerUkKeywordPage, { generateMetadata } from './gunzodus-seasonal-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusSeasonalServerUkKeywordPage />;
}
