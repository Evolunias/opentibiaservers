import WithReviewsImperianicServerKeywordPage, { generateMetadata } from './with-reviews-imperianic-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsImperianicServerKeywordPage />;
}
