import RealMapReviewFranceKeywordPage, { generateMetadata } from './real-map-review-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapReviewFranceKeywordPage />;
}
