import OldSchoolGunzodusGuideKeywordPage, { generateMetadata } from './old-school-gunzodus-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolGunzodusGuideKeywordPage />;
}
