import SeasonalGunzodusServerKeywordPage, { generateMetadata } from './seasonal-gunzodus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalGunzodusServerKeywordPage />;
}
