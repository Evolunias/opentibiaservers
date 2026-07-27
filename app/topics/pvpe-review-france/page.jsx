import PvpeReviewFranceKeywordPage, { generateMetadata } from './pvpe-review-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeReviewFranceKeywordPage />;
}
