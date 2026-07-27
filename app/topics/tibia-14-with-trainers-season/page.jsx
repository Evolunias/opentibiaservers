import Tibia14WithTrainersSeasonKeywordPage, { generateMetadata } from './tibia-14-with-trainers-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14WithTrainersSeasonKeywordPage />;
}
