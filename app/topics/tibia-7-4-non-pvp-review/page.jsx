import Tibia74NonPvpReviewKeywordPage, { generateMetadata } from './tibia-7-4-non-pvp-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74NonPvpReviewKeywordPage />;
}
