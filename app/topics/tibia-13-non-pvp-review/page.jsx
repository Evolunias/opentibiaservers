import Tibia13NonPvpReviewKeywordPage, { generateMetadata } from './tibia-13-non-pvp-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13NonPvpReviewKeywordPage />;
}
