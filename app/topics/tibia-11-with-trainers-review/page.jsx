import Tibia11WithTrainersReviewKeywordPage, { generateMetadata } from './tibia-11-with-trainers-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithTrainersReviewKeywordPage />;
}
