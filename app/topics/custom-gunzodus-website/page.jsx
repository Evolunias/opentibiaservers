import CustomGunzodusWebsiteKeywordPage, { generateMetadata } from './custom-gunzodus-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomGunzodusWebsiteKeywordPage />;
}
