import Trashformers96WithReviewsServerKeywordPage, { generateMetadata } from './trashformers-9-6-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Trashformers96WithReviewsServerKeywordPage />;
}
