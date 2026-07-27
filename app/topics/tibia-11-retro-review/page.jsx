import Tibia11RetroReviewKeywordPage, { generateMetadata } from './tibia-11-retro-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11RetroReviewKeywordPage />;
}
