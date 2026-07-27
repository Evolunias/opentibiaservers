import NoResetGunzodusWikiKeywordPage, { generateMetadata } from './no-reset-gunzodus-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetGunzodusWikiKeywordPage />;
}
