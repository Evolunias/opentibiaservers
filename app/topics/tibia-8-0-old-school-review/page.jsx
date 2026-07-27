import Tibia80OldSchoolReviewKeywordPage, { generateMetadata } from './tibia-8-0-old-school-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80OldSchoolReviewKeywordPage />;
}
