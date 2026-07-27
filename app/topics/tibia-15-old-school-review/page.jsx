import Tibia15OldSchoolReviewKeywordPage, { generateMetadata } from './tibia-15-old-school-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15OldSchoolReviewKeywordPage />;
}
