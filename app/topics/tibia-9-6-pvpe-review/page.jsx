import Tibia96PvpeReviewKeywordPage, { generateMetadata } from './tibia-9-6-pvpe-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96PvpeReviewKeywordPage />;
}
