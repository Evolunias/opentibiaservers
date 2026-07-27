import PvpeReviewGermanyKeywordPage, { generateMetadata } from './pvpe-review-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeReviewGermanyKeywordPage />;
}
