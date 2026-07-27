import WithReviewsCoxaotLoginKeywordPage, { generateMetadata } from './with-reviews-coxaot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCoxaotLoginKeywordPage />;
}
