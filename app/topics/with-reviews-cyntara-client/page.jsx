import WithReviewsCyntaraClientKeywordPage, { generateMetadata } from './with-reviews-cyntara-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCyntaraClientKeywordPage />;
}
