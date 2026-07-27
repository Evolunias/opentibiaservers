import WithReviewsMiracleGuideKeywordPage, { generateMetadata } from './with-reviews-miracle-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsMiracleGuideKeywordPage />;
}
