import OldSchoolGunzodusWebsiteKeywordPage, { generateMetadata } from './old-school-gunzodus-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolGunzodusWebsiteKeywordPage />;
}
