import WithReviewsCyntaraOtKeywordPage, { generateMetadata } from './with-reviews-cyntara-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCyntaraOtKeywordPage />;
}
