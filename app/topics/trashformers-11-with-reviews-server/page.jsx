import Trashformers11WithReviewsServerKeywordPage, { generateMetadata } from './trashformers-11-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Trashformers11WithReviewsServerKeywordPage />;
}
