import Tibia13WithTrainersStatusKeywordPage, { generateMetadata } from './tibia-13-with-trainers-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13WithTrainersStatusKeywordPage />;
}
