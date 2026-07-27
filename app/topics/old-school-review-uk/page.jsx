import OldSchoolReviewUkKeywordPage, { generateMetadata } from './old-school-review-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolReviewUkKeywordPage />;
}
