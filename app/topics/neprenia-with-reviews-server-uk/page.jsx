import NepreniaWithReviewsServerUkKeywordPage, { generateMetadata } from './neprenia-with-reviews-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaWithReviewsServerUkKeywordPage />;
}
