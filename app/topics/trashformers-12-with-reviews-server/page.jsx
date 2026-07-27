import Trashformers12WithReviewsServerKeywordPage, { generateMetadata } from './trashformers-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Trashformers12WithReviewsServerKeywordPage />;
}
