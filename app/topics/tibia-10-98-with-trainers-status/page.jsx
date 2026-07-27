import Tibia1098WithTrainersStatusKeywordPage, { generateMetadata } from './tibia-10-98-with-trainers-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098WithTrainersStatusKeywordPage />;
}
