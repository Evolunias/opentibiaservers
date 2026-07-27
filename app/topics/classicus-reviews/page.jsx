import ClassicusReviewsKeywordPage, { generateMetadata } from './classicus-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusReviewsKeywordPage />;
}
