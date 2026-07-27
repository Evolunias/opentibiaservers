import ClassicusReviewKeywordPage, { generateMetadata } from './classicus-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusReviewKeywordPage />;
}
