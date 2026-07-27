import WithReviewsAureraGlobalKeywordPage, { generateMetadata } from './with-reviews-aurera-global';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsAureraGlobalKeywordPage />;
}
