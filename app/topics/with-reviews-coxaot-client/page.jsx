import WithReviewsCoxaotClientKeywordPage, { generateMetadata } from './with-reviews-coxaot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCoxaotClientKeywordPage />;
}
