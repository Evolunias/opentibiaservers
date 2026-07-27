import WithReviewsCyntaraGuideKeywordPage, { generateMetadata } from './with-reviews-cyntara-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCyntaraGuideKeywordPage />;
}
