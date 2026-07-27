import Tibia772WithTrainersStatusKeywordPage, { generateMetadata } from './tibia-7-72-with-trainers-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772WithTrainersStatusKeywordPage />;
}
