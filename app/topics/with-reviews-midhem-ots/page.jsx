import WithReviewsMidhemOtsKeywordPage, { generateMetadata } from './with-reviews-midhem-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMidhemOtsKeywordPage />;
}
