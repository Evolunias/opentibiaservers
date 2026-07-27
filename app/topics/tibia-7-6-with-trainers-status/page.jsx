import Tibia76WithTrainersStatusKeywordPage, { generateMetadata } from './tibia-7-6-with-trainers-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76WithTrainersStatusKeywordPage />;
}
