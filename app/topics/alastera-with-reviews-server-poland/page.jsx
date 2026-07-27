import AlasteraWithReviewsServerPolandKeywordPage, { generateMetadata } from './alastera-with-reviews-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraWithReviewsServerPolandKeywordPage />;
}
