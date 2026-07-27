import OldSchoolGunzodusOtsKeywordPage, { generateMetadata } from './old-school-gunzodus-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolGunzodusOtsKeywordPage />;
}
