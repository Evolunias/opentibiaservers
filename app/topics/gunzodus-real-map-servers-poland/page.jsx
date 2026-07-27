import GunzodusRealMapServersPolandKeywordPage, { generateMetadata } from './gunzodus-real-map-servers-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusRealMapServersPolandKeywordPage />;
}
