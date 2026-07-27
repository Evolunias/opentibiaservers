import WithReviewsCyntaraOtServerKeywordPage, { generateMetadata } from './with-reviews-cyntara-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCyntaraOtServerKeywordPage />;
}
