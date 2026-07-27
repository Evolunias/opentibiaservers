import Tibia84WithTrainersStatusKeywordPage, { generateMetadata } from './tibia-8-4-with-trainers-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84WithTrainersStatusKeywordPage />;
}
