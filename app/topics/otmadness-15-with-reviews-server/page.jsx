import Otmadness15WithReviewsServerKeywordPage, { generateMetadata } from './otmadness-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Otmadness15WithReviewsServerKeywordPage />;
}
