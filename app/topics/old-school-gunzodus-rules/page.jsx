import OldSchoolGunzodusRulesKeywordPage, { generateMetadata } from './old-school-gunzodus-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolGunzodusRulesKeywordPage />;
}
