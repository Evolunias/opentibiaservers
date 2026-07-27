import Tibia14PvpeReviewKeywordPage, { generateMetadata } from './tibia-14-pvpe-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14PvpeReviewKeywordPage />;
}
