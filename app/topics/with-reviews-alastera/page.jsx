import WithReviewsAlasteraKeywordPage, { generateMetadata } from './with-reviews-alastera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsAlasteraKeywordPage />;
}
