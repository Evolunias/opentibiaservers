import OldSchoolReviewArgentinaKeywordPage, { generateMetadata } from './old-school-review-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolReviewArgentinaKeywordPage />;
}
