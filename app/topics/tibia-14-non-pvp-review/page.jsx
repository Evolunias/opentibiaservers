import Tibia14NonPvpReviewKeywordPage, { generateMetadata } from './tibia-14-non-pvp-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14NonPvpReviewKeywordPage />;
}
