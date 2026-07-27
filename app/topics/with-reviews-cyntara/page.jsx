import WithReviewsCyntaraKeywordPage, { generateMetadata } from './with-reviews-cyntara';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCyntaraKeywordPage />;
}
