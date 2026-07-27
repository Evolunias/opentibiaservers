import WithReviewsMidhemOtKeywordPage, { generateMetadata } from './with-reviews-midhem-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMidhemOtKeywordPage />;
}
