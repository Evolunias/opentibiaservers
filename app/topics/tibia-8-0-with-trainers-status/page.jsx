import Tibia80WithTrainersStatusKeywordPage, { generateMetadata } from './tibia-8-0-with-trainers-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithTrainersStatusKeywordPage />;
}
