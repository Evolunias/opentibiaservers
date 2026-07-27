import NewGunzodusWikiKeywordPage, { generateMetadata } from './new-gunzodus-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewGunzodusWikiKeywordPage />;
}
