import WithReviewsGunzodusGuideKeywordPage, { generateMetadata } from './with-reviews-gunzodus-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsGunzodusGuideKeywordPage />;
}
