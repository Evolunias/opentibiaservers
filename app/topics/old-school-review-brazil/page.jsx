import OldSchoolReviewBrazilKeywordPage, { generateMetadata } from './old-school-review-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolReviewBrazilKeywordPage />;
}
