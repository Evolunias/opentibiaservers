import Gunzodus12WithReviewsServerKeywordPage, { generateMetadata } from './gunzodus-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus12WithReviewsServerKeywordPage />;
}
