import Gunzodus14WithReviewsServerKeywordPage, { generateMetadata } from './gunzodus-14-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus14WithReviewsServerKeywordPage />;
}
