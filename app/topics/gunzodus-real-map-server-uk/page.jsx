import GunzodusRealMapServerUkKeywordPage, { generateMetadata } from './gunzodus-real-map-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusRealMapServerUkKeywordPage />;
}
