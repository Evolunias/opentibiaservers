import WithReviewsCoxaotKeywordPage, { generateMetadata } from './with-reviews-coxaot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCoxaotKeywordPage />;
}
