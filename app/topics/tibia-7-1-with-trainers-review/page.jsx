import Tibia71WithTrainersReviewKeywordPage, { generateMetadata } from './tibia-7-1-with-trainers-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71WithTrainersReviewKeywordPage />;
}
