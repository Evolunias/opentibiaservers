import Tibia1098NonPvpReviewKeywordPage, { generateMetadata } from './tibia-10-98-non-pvp-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098NonPvpReviewKeywordPage />;
}
