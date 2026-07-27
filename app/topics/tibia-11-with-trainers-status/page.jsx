import Tibia11WithTrainersStatusKeywordPage, { generateMetadata } from './tibia-11-with-trainers-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithTrainersStatusKeywordPage />;
}
