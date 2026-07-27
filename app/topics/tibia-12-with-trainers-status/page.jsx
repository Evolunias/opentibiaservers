import Tibia12WithTrainersStatusKeywordPage, { generateMetadata } from './tibia-12-with-trainers-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithTrainersStatusKeywordPage />;
}
