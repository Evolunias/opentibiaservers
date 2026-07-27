import Tibia80WithTrainersReviewKeywordPage, { generateMetadata } from './tibia-8-0-with-trainers-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithTrainersReviewKeywordPage />;
}
