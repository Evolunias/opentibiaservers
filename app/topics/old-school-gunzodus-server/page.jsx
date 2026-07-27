import OldSchoolGunzodusServerKeywordPage, { generateMetadata } from './old-school-gunzodus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolGunzodusServerKeywordPage />;
}
