import Tibia86WithTrainersReviewKeywordPage, { generateMetadata } from './tibia-8-6-with-trainers-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86WithTrainersReviewKeywordPage />;
}
