import WithReviewsGunzodusLoginKeywordPage, { generateMetadata } from './with-reviews-gunzodus-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsGunzodusLoginKeywordPage />;
}
