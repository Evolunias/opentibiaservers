import CarlinotWithReviewsServerUkKeywordPage, { generateMetadata } from './carlinot-with-reviews-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotWithReviewsServerUkKeywordPage />;
}
