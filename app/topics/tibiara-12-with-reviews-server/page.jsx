import Tibiara12WithReviewsServerKeywordPage, { generateMetadata } from './tibiara-12-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara12WithReviewsServerKeywordPage />;
}
