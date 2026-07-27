import Tibia15LowExpReviewKeywordPage, { generateMetadata } from './tibia-15-low-exp-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15LowExpReviewKeywordPage />;
}
