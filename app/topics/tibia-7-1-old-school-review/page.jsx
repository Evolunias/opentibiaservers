import Tibia71OldSchoolReviewKeywordPage, { generateMetadata } from './tibia-7-1-old-school-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71OldSchoolReviewKeywordPage />;
}
