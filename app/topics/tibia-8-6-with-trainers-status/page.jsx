import Tibia86WithTrainersStatusKeywordPage, { generateMetadata } from './tibia-8-6-with-trainers-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86WithTrainersStatusKeywordPage />;
}
