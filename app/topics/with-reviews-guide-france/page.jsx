import WithReviewsGuideFranceKeywordPage, { generateMetadata } from './with-reviews-guide-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsGuideFranceKeywordPage />;
}
