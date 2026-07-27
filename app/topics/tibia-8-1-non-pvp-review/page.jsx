import Tibia81NonPvpReviewKeywordPage, { generateMetadata } from './tibia-8-1-non-pvp-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81NonPvpReviewKeywordPage />;
}
