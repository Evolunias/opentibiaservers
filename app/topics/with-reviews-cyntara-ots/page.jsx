import WithReviewsCyntaraOtsKeywordPage, { generateMetadata } from './with-reviews-cyntara-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCyntaraOtsKeywordPage />;
}
