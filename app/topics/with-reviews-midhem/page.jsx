import WithReviewsMidhemKeywordPage, { generateMetadata } from './with-reviews-midhem';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMidhemKeywordPage />;
}
