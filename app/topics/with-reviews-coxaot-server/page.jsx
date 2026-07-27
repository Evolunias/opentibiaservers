import WithReviewsCoxaotServerKeywordPage, { generateMetadata } from './with-reviews-coxaot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCoxaotServerKeywordPage />;
}
