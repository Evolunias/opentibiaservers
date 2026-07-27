import WithReviewsClassicusLoginKeywordPage, { generateMetadata } from './with-reviews-classicus-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsClassicusLoginKeywordPage />;
}
