import OldSchoolGunzodusLoginKeywordPage, { generateMetadata } from './old-school-gunzodus-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolGunzodusLoginKeywordPage />;
}
