import OldSchoolReviewUsaKeywordPage, { generateMetadata } from './old-school-review-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolReviewUsaKeywordPage />;
}
