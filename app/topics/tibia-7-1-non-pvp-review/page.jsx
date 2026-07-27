import Tibia71NonPvpReviewKeywordPage, { generateMetadata } from './tibia-7-1-non-pvp-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71NonPvpReviewKeywordPage />;
}
