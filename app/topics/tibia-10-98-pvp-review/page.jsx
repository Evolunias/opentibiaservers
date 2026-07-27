import Tibia1098PvpReviewKeywordPage, { generateMetadata } from './tibia-10-98-pvp-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098PvpReviewKeywordPage />;
}
