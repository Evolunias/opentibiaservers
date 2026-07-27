import Tibia96NonPvpReviewKeywordPage, { generateMetadata } from './tibia-9-6-non-pvp-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96NonPvpReviewKeywordPage />;
}
