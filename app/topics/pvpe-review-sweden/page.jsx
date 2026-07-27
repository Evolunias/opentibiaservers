import PvpeReviewSwedenKeywordPage, { generateMetadata } from './pvpe-review-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeReviewSwedenKeywordPage />;
}
