import Tibia76PvpReviewKeywordPage, { generateMetadata } from './tibia-7-6-pvp-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76PvpReviewKeywordPage />;
}
