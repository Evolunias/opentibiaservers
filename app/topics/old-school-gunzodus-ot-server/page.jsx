import OldSchoolGunzodusOtServerKeywordPage, { generateMetadata } from './old-school-gunzodus-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolGunzodusOtServerKeywordPage />;
}
