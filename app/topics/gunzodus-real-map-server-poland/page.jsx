import GunzodusRealMapServerPolandKeywordPage, { generateMetadata } from './gunzodus-real-map-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusRealMapServerPolandKeywordPage />;
}
