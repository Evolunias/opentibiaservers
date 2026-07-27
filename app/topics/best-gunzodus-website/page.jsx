import BestGunzodusWebsiteKeywordPage, { generateMetadata } from './best-gunzodus-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestGunzodusWebsiteKeywordPage />;
}
