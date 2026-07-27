import WithReviewsGunzodusClientKeywordPage, { generateMetadata } from './with-reviews-gunzodus-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsGunzodusClientKeywordPage />;
}
