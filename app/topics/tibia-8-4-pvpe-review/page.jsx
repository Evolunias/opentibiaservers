import Tibia84PvpeReviewKeywordPage, { generateMetadata } from './tibia-8-4-pvpe-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84PvpeReviewKeywordPage />;
}
