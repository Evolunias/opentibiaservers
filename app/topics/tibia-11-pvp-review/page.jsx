import Tibia11PvpReviewKeywordPage, { generateMetadata } from './tibia-11-pvp-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11PvpReviewKeywordPage />;
}
