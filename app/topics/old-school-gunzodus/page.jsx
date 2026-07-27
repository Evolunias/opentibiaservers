import OldSchoolGunzodusKeywordPage, { generateMetadata } from './old-school-gunzodus';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolGunzodusKeywordPage />;
}
