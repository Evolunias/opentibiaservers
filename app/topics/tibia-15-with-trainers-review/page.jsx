import Tibia15WithTrainersReviewKeywordPage, { generateMetadata } from './tibia-15-with-trainers-review';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15WithTrainersReviewKeywordPage />;
}
