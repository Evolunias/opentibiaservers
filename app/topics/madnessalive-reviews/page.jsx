import MadnessaliveReviewsKeywordPage, { generateMetadata } from './madnessalive-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveReviewsKeywordPage />;
}
