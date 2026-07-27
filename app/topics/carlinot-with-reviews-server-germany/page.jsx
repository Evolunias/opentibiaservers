import CarlinotWithReviewsServerGermanyKeywordPage, { generateMetadata } from './carlinot-with-reviews-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotWithReviewsServerGermanyKeywordPage />;
}
