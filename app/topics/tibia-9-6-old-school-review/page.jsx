import Tibia96OldSchoolReviewKeywordPage, { generateMetadata } from './tibia-9-6-old-school-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96OldSchoolReviewKeywordPage />;
}
