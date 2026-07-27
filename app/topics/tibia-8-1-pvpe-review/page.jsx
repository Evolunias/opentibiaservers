import Tibia81PvpeReviewKeywordPage, { generateMetadata } from './tibia-8-1-pvpe-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81PvpeReviewKeywordPage />;
}
