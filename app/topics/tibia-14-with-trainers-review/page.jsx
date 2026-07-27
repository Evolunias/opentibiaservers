import Tibia14WithTrainersReviewKeywordPage, { generateMetadata } from './tibia-14-with-trainers-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14WithTrainersReviewKeywordPage />;
}
