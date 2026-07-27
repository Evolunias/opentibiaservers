import WithReviewsClassicusGuideKeywordPage, { generateMetadata } from './with-reviews-classicus-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsClassicusGuideKeywordPage />;
}
