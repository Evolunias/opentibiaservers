import WithReviewsNtoStarRegisterKeywordPage, { generateMetadata } from './with-reviews-nto-star-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsNtoStarRegisterKeywordPage />;
}
