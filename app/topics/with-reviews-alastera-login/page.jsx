import WithReviewsAlasteraLoginKeywordPage, { generateMetadata } from './with-reviews-alastera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsAlasteraLoginKeywordPage />;
}
