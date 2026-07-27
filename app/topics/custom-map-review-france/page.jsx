import CustomMapReviewFranceKeywordPage, { generateMetadata } from './custom-map-review-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMapReviewFranceKeywordPage />;
}
