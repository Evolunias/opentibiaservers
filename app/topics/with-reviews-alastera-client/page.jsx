import WithReviewsAlasteraClientKeywordPage, { generateMetadata } from './with-reviews-alastera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsAlasteraClientKeywordPage />;
}
