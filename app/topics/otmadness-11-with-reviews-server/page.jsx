import Otmadness11WithReviewsServerKeywordPage, { generateMetadata } from './otmadness-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Otmadness11WithReviewsServerKeywordPage />;
}
