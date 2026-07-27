import Tibia15EvoReviewKeywordPage, { generateMetadata } from './tibia-15-evo-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15EvoReviewKeywordPage />;
}
