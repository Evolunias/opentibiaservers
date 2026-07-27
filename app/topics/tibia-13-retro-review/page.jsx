import Tibia13RetroReviewKeywordPage, { generateMetadata } from './tibia-13-retro-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13RetroReviewKeywordPage />;
}
