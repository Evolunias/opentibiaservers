import ActiveGunzodusWikiKeywordPage, { generateMetadata } from './active-gunzodus-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveGunzodusWikiKeywordPage />;
}
