import Tibia13LowExpReviewKeywordPage, { generateMetadata } from './tibia-13-low-exp-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13LowExpReviewKeywordPage />;
}
