import Tibia84NonPvpReviewKeywordPage, { generateMetadata } from './tibia-8-4-non-pvp-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84NonPvpReviewKeywordPage />;
}
