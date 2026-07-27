import Tibia854WithTrainersStatusKeywordPage, { generateMetadata } from './tibia-8-54-with-trainers-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia854WithTrainersStatusKeywordPage />;
}
