import Tibia80LowExpReviewKeywordPage, { generateMetadata } from './tibia-8-0-low-exp-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80LowExpReviewKeywordPage />;
}
