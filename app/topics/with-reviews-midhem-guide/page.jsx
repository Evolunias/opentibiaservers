import WithReviewsMidhemGuideKeywordPage, { generateMetadata } from './with-reviews-midhem-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMidhemGuideKeywordPage />;
}
