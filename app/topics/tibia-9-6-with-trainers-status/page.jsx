import Tibia96WithTrainersStatusKeywordPage, { generateMetadata } from './tibia-9-6-with-trainers-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96WithTrainersStatusKeywordPage />;
}
