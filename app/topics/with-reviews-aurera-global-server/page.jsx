import WithReviewsAureraGlobalServerKeywordPage, { generateMetadata } from './with-reviews-aurera-global-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsAureraGlobalServerKeywordPage />;
}
