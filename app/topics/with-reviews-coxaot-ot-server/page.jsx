import WithReviewsCoxaotOtServerKeywordPage, { generateMetadata } from './with-reviews-coxaot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCoxaotOtServerKeywordPage />;
}
