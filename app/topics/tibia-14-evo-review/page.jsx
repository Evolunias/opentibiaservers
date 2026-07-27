import Tibia14EvoReviewKeywordPage, { generateMetadata } from './tibia-14-evo-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14EvoReviewKeywordPage />;
}
