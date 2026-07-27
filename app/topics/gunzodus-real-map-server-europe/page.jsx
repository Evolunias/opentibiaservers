import GunzodusRealMapServerEuropeKeywordPage, { generateMetadata } from './gunzodus-real-map-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusRealMapServerEuropeKeywordPage />;
}
