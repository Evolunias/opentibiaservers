import ActiveGunzodusWebsiteKeywordPage, { generateMetadata } from './active-gunzodus-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveGunzodusWebsiteKeywordPage />;
}
