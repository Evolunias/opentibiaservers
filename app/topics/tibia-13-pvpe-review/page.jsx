import Tibia13PvpeReviewKeywordPage, { generateMetadata } from './tibia-13-pvpe-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13PvpeReviewKeywordPage />;
}
