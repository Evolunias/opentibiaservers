import OldSchoolGunzodusRegisterKeywordPage, { generateMetadata } from './old-school-gunzodus-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolGunzodusRegisterKeywordPage />;
}
