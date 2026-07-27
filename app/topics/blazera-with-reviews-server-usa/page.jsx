import BlazeraWithReviewsServerUsaKeywordPage, { generateMetadata } from './blazera-with-reviews-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraWithReviewsServerUsaKeywordPage />;
}
