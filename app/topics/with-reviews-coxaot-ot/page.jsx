import WithReviewsCoxaotOtKeywordPage, { generateMetadata } from './with-reviews-coxaot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCoxaotOtKeywordPage />;
}
