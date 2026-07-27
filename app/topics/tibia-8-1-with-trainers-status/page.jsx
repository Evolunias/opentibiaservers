import Tibia81WithTrainersStatusKeywordPage, { generateMetadata } from './tibia-8-1-with-trainers-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81WithTrainersStatusKeywordPage />;
}
