import OldSchoolGunzodusClientKeywordPage, { generateMetadata } from './old-school-gunzodus-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolGunzodusClientKeywordPage />;
}
