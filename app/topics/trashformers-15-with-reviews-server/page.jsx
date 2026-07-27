import Trashformers15WithReviewsServerKeywordPage, { generateMetadata } from './trashformers-15-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Trashformers15WithReviewsServerKeywordPage />;
}
