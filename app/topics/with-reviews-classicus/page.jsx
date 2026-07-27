import WithReviewsClassicusKeywordPage, { generateMetadata } from './with-reviews-classicus';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsClassicusKeywordPage />;
}
