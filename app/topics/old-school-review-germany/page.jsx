import OldSchoolReviewGermanyKeywordPage, { generateMetadata } from './old-school-review-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolReviewGermanyKeywordPage />;
}
