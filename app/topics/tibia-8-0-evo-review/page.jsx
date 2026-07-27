import Tibia80EvoReviewKeywordPage, { generateMetadata } from './tibia-8-0-evo-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80EvoReviewKeywordPage />;
}
