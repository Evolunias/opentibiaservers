import OldSchoolReviewSouthAmericaKeywordPage, { generateMetadata } from './old-school-review-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolReviewSouthAmericaKeywordPage />;
}
