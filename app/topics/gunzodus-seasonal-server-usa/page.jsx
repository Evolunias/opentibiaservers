import GunzodusSeasonalServerUsaKeywordPage, { generateMetadata } from './gunzodus-seasonal-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusSeasonalServerUsaKeywordPage />;
}
