import CarlinotWithReviewsServerPolandKeywordPage, { generateMetadata } from './carlinot-with-reviews-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotWithReviewsServerPolandKeywordPage />;
}
