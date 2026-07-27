import Tibia100NonPvpReviewKeywordPage, { generateMetadata } from './tibia-10-0-non-pvp-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100NonPvpReviewKeywordPage />;
}
