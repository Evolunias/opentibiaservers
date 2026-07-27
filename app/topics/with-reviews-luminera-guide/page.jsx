import WithReviewsLumineraGuideKeywordPage, { generateMetadata } from './with-reviews-luminera-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsLumineraGuideKeywordPage />;
}
