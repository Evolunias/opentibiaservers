import OldSchoolGunzodusForumKeywordPage, { generateMetadata } from './old-school-gunzodus-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolGunzodusForumKeywordPage />;
}
