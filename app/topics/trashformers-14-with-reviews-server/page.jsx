import Trashformers14WithReviewsServerKeywordPage, { generateMetadata } from './trashformers-14-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Trashformers14WithReviewsServerKeywordPage />;
}
