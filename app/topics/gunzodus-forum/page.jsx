import GunzodusForumKeywordPage, { generateMetadata } from './gunzodus-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusForumKeywordPage />;
}
