import Tibia14RetroReviewKeywordPage, { generateMetadata } from './tibia-14-retro-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14RetroReviewKeywordPage />;
}
