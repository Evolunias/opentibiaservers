import CustomGunzodusWikiKeywordPage, { generateMetadata } from './custom-gunzodus-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomGunzodusWikiKeywordPage />;
}
