import WithReviewsGunzodusForumKeywordPage, { generateMetadata } from './with-reviews-gunzodus-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsGunzodusForumKeywordPage />;
}
