import OldSchoolGunzodusOfficialKeywordPage, { generateMetadata } from './old-school-gunzodus-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolGunzodusOfficialKeywordPage />;
}
