import Tibia76PvpeReviewKeywordPage, { generateMetadata } from './tibia-7-6-pvpe-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76PvpeReviewKeywordPage />;
}
