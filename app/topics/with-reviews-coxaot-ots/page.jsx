import WithReviewsCoxaotOtsKeywordPage, { generateMetadata } from './with-reviews-coxaot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCoxaotOtsKeywordPage />;
}
