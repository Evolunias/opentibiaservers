import ClassickDrakoriaReviewKeywordPage, { generateMetadata } from './classick-drakoria-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassickDrakoriaReviewKeywordPage />;
}
