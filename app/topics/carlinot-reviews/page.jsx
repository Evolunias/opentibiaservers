import CarlinotReviewsKeywordPage, { generateMetadata } from './carlinot-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotReviewsKeywordPage />;
}
