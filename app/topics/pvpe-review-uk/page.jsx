import PvpeReviewUkKeywordPage, { generateMetadata } from './pvpe-review-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeReviewUkKeywordPage />;
}
