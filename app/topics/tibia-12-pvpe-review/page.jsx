import Tibia12PvpeReviewKeywordPage, { generateMetadata } from './tibia-12-pvpe-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12PvpeReviewKeywordPage />;
}
