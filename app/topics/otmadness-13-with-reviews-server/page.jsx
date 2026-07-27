import Otmadness13WithReviewsServerKeywordPage, { generateMetadata } from './otmadness-13-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Otmadness13WithReviewsServerKeywordPage />;
}
