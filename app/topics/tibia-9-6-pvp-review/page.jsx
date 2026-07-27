import Tibia96PvpReviewKeywordPage, { generateMetadata } from './tibia-9-6-pvp-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96PvpReviewKeywordPage />;
}
