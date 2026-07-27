import Trashformers13WithReviewsServerKeywordPage, { generateMetadata } from './trashformers-13-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Trashformers13WithReviewsServerKeywordPage />;
}
