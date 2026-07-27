import WithReviewsAlasteraOtKeywordPage, { generateMetadata } from './with-reviews-alastera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsAlasteraOtKeywordPage />;
}
