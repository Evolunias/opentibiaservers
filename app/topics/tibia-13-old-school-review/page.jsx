import Tibia13OldSchoolReviewKeywordPage, { generateMetadata } from './tibia-13-old-school-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13OldSchoolReviewKeywordPage />;
}
