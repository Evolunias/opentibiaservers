import Tibia11LowExpReviewKeywordPage, { generateMetadata } from './tibia-11-low-exp-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11LowExpReviewKeywordPage />;
}
