import Tibia11PvpeReviewKeywordPage, { generateMetadata } from './tibia-11-pvpe-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11PvpeReviewKeywordPage />;
}
