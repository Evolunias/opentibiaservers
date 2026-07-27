import PvpeReviewBrazilKeywordPage, { generateMetadata } from './pvpe-review-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeReviewBrazilKeywordPage />;
}
