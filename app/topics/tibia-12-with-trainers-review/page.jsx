import Tibia12WithTrainersReviewKeywordPage, { generateMetadata } from './tibia-12-with-trainers-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithTrainersReviewKeywordPage />;
}
