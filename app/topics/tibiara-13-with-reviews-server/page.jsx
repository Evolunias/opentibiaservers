import Tibiara13WithReviewsServerKeywordPage, { generateMetadata } from './tibiara-13-with-reviews-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara13WithReviewsServerKeywordPage />;
}
