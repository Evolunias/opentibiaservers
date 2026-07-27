import PvpeReviewPolandKeywordPage, { generateMetadata } from './pvpe-review-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeReviewPolandKeywordPage />;
}
