import CarlinotWithReviewsServerFranceKeywordPage, { generateMetadata } from './carlinot-with-reviews-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CarlinotWithReviewsServerFranceKeywordPage />;
}
