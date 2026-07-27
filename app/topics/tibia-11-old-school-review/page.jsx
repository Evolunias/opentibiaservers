import Tibia11OldSchoolReviewKeywordPage, { generateMetadata } from './tibia-11-old-school-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11OldSchoolReviewKeywordPage />;
}
