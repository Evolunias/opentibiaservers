import WithReviewsAlasteraOtServerKeywordPage, { generateMetadata } from './with-reviews-alastera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsAlasteraOtServerKeywordPage />;
}
