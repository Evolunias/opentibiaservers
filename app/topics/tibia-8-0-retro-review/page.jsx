import Tibia80RetroReviewKeywordPage, { generateMetadata } from './tibia-8-0-retro-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80RetroReviewKeywordPage />;
}
