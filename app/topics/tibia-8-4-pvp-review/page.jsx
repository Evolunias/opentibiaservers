import Tibia84PvpReviewKeywordPage, { generateMetadata } from './tibia-8-4-pvp-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84PvpReviewKeywordPage />;
}
