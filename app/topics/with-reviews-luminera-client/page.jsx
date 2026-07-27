import WithReviewsLumineraClientKeywordPage, { generateMetadata } from './with-reviews-luminera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsLumineraClientKeywordPage />;
}
