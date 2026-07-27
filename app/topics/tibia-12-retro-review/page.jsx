import Tibia12RetroReviewKeywordPage, { generateMetadata } from './tibia-12-retro-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12RetroReviewKeywordPage />;
}
