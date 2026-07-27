import Tibia13PvpReviewKeywordPage, { generateMetadata } from './tibia-13-pvp-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13PvpReviewKeywordPage />;
}
