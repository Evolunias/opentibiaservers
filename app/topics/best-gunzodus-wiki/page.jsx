import BestGunzodusWikiKeywordPage, { generateMetadata } from './best-gunzodus-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestGunzodusWikiKeywordPage />;
}
