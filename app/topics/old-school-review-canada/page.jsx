import OldSchoolReviewCanadaKeywordPage, { generateMetadata } from './old-school-review-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolReviewCanadaKeywordPage />;
}
