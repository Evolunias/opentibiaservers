import OldSchoolReviewFranceKeywordPage, { generateMetadata } from './old-school-review-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolReviewFranceKeywordPage />;
}
