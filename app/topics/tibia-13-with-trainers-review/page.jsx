import Tibia13WithTrainersReviewKeywordPage, { generateMetadata } from './tibia-13-with-trainers-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13WithTrainersReviewKeywordPage />;
}
