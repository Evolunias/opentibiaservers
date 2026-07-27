import CurrentGunzodusWikiKeywordPage, { generateMetadata } from './current-gunzodus-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentGunzodusWikiKeywordPage />;
}
