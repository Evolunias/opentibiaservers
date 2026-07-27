import OldSchoolReviewLatinAmericaKeywordPage, { generateMetadata } from './old-school-review-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolReviewLatinAmericaKeywordPage />;
}
