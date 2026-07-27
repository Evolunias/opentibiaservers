import WithReviewsMidhemLoginKeywordPage, { generateMetadata } from './with-reviews-midhem-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMidhemLoginKeywordPage />;
}
