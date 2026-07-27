import Tibia15RetroReviewKeywordPage, { generateMetadata } from './tibia-15-retro-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15RetroReviewKeywordPage />;
}
