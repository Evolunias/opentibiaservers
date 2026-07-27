import ThaisotWithReviewsServerFranceKeywordPage, { generateMetadata } from './thaisot-with-reviews-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotWithReviewsServerFranceKeywordPage />;
}
