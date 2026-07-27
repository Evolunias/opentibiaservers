import FreshStartGunzodusForumKeywordPage, { generateMetadata } from './fresh-start-gunzodus-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartGunzodusForumKeywordPage />;
}
