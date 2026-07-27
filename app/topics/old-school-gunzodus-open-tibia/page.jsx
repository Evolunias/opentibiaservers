import OldSchoolGunzodusOpenTibiaKeywordPage, { generateMetadata } from './old-school-gunzodus-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolGunzodusOpenTibiaKeywordPage />;
}
