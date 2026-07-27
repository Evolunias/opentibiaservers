import Gunzodus13WithReviewsServerKeywordPage, { generateMetadata } from './gunzodus-13-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus13WithReviewsServerKeywordPage />;
}
