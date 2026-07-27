import FreshStartGunzodusWebsiteKeywordPage, { generateMetadata } from './fresh-start-gunzodus-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartGunzodusWebsiteKeywordPage />;
}
