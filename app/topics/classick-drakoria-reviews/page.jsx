import ClassickDrakoriaReviewsKeywordPage, { generateMetadata } from './classick-drakoria-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoriaReviewsKeywordPage />;
}
