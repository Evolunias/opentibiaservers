import Tibia15WithTrainersStatusKeywordPage, { generateMetadata } from './tibia-15-with-trainers-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15WithTrainersStatusKeywordPage />;
}
