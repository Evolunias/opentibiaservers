import OldSchoolReviewSwedenKeywordPage, { generateMetadata } from './old-school-review-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolReviewSwedenKeywordPage />;
}
