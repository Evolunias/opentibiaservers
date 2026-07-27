import WithReviewsImperianicLoginKeywordPage, { generateMetadata } from './with-reviews-imperianic-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsImperianicLoginKeywordPage />;
}
