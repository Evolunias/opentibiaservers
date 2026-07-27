import CustomGunzodusForumKeywordPage, { generateMetadata } from './custom-gunzodus-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomGunzodusForumKeywordPage />;
}
