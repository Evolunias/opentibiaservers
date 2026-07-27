import OldSchoolReviewEuropeKeywordPage, { generateMetadata } from './old-school-review-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolReviewEuropeKeywordPage />;
}
