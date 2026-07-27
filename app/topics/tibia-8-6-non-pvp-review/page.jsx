import Tibia86NonPvpReviewKeywordPage, { generateMetadata } from './tibia-8-6-non-pvp-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86NonPvpReviewKeywordPage />;
}
