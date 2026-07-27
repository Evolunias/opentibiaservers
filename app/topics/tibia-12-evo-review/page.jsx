import Tibia12EvoReviewKeywordPage, { generateMetadata } from './tibia-12-evo-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12EvoReviewKeywordPage />;
}
