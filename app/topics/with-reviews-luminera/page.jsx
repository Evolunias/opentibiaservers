import WithReviewsLumineraKeywordPage, { generateMetadata } from './with-reviews-luminera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsLumineraKeywordPage />;
}
