import WithReviewsCanobRegisterKeywordPage, { generateMetadata } from './with-reviews-canob-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsCanobRegisterKeywordPage />;
}
