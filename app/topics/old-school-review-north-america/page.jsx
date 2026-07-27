import OldSchoolReviewNorthAmericaKeywordPage, { generateMetadata } from './old-school-review-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolReviewNorthAmericaKeywordPage />;
}
