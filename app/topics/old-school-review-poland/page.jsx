import OldSchoolReviewPolandKeywordPage, { generateMetadata } from './old-school-review-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolReviewPolandKeywordPage />;
}
