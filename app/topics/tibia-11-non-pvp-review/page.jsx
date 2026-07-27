import Tibia11NonPvpReviewKeywordPage, { generateMetadata } from './tibia-11-non-pvp-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11NonPvpReviewKeywordPage />;
}
