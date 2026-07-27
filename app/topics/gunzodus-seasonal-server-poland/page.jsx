import GunzodusSeasonalServerPolandKeywordPage, { generateMetadata } from './gunzodus-seasonal-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusSeasonalServerPolandKeywordPage />;
}
