import Tibia14WithTrainersStatusKeywordPage, { generateMetadata } from './tibia-14-with-trainers-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14WithTrainersStatusKeywordPage />;
}
