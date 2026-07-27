import WithReviewsArchlightKeywordPage, { generateMetadata } from './with-reviews-archlight';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsArchlightKeywordPage />;
}
