import WithReviewsClassicusClientKeywordPage, { generateMetadata } from './with-reviews-classicus-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsClassicusClientKeywordPage />;
}
