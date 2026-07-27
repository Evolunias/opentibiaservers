import Tibia15PvpReviewKeywordPage, { generateMetadata } from './tibia-15-pvp-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15PvpReviewKeywordPage />;
}
