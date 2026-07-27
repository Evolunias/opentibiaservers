import Tibia772PvpReviewKeywordPage, { generateMetadata } from './tibia-7-72-pvp-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772PvpReviewKeywordPage />;
}
