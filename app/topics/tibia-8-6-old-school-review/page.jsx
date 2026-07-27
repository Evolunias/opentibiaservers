import Tibia86OldSchoolReviewKeywordPage, { generateMetadata } from './tibia-8-6-old-school-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86OldSchoolReviewKeywordPage />;
}
