import Tibia13EvoReviewKeywordPage, { generateMetadata } from './tibia-13-evo-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13EvoReviewKeywordPage />;
}
