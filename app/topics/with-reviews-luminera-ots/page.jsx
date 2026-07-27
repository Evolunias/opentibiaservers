import WithReviewsLumineraOtsKeywordPage, { generateMetadata } from './with-reviews-luminera-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsLumineraOtsKeywordPage />;
}
