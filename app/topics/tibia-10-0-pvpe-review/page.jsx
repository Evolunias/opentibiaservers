import Tibia100PvpeReviewKeywordPage, { generateMetadata } from './tibia-10-0-pvpe-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100PvpeReviewKeywordPage />;
}
