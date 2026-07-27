import Otmadness12WithReviewsServerKeywordPage, { generateMetadata } from './otmadness-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Otmadness12WithReviewsServerKeywordPage />;
}
