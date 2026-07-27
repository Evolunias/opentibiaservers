import Tibia15NonPvpReviewKeywordPage, { generateMetadata } from './tibia-15-non-pvp-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15NonPvpReviewKeywordPage />;
}
