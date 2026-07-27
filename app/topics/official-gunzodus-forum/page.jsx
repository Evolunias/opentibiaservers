import OfficialGunzodusForumKeywordPage, { generateMetadata } from './official-gunzodus-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialGunzodusForumKeywordPage />;
}
