import NewSeasonGunzodusForumKeywordPage, { generateMetadata } from './new-season-gunzodus-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonGunzodusForumKeywordPage />;
}
