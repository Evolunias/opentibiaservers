import Gunzodus15WithReviewsServerKeywordPage, { generateMetadata } from './gunzodus-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Gunzodus15WithReviewsServerKeywordPage />;
}
