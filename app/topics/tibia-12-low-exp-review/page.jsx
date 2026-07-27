import Tibia12LowExpReviewKeywordPage, { generateMetadata } from './tibia-12-low-exp-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12LowExpReviewKeywordPage />;
}
