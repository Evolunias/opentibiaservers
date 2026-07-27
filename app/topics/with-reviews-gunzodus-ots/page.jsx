import WithReviewsGunzodusOtsKeywordPage, { generateMetadata } from './with-reviews-gunzodus-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsGunzodusOtsKeywordPage />;
}
