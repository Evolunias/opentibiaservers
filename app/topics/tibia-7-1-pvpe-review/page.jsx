import Tibia71PvpeReviewKeywordPage, { generateMetadata } from './tibia-7-1-pvpe-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71PvpeReviewKeywordPage />;
}
