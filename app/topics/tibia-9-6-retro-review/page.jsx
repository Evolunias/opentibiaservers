import Tibia96RetroReviewKeywordPage, { generateMetadata } from './tibia-9-6-retro-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96RetroReviewKeywordPage />;
}
