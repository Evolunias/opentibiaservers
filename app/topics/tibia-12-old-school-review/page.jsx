import Tibia12OldSchoolReviewKeywordPage, { generateMetadata } from './tibia-12-old-school-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12OldSchoolReviewKeywordPage />;
}
