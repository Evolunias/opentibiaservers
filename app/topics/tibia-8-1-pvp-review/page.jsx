import Tibia81PvpReviewKeywordPage, { generateMetadata } from './tibia-8-1-pvp-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81PvpReviewKeywordPage />;
}
