import OldSchoolTibiaServerReviewsKeywordPage, { generateMetadata } from './old-school-tibia-server-reviews';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaServerReviewsKeywordPage />;
}
