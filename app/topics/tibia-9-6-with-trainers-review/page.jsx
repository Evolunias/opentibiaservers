import Tibia96WithTrainersReviewKeywordPage, { generateMetadata } from './tibia-9-6-with-trainers-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96WithTrainersReviewKeywordPage />;
}
