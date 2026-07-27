import OldSchoolGunzodusTibiaKeywordPage, { generateMetadata } from './old-school-gunzodus-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolGunzodusTibiaKeywordPage />;
}
