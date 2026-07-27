import MadnessaliveReviewKeywordPage, { generateMetadata } from './madnessalive-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveReviewKeywordPage />;
}
