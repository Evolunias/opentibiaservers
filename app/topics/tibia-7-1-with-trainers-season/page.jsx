import Tibia71WithTrainersSeasonKeywordPage, { generateMetadata } from './tibia-7-1-with-trainers-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71WithTrainersSeasonKeywordPage />;
}
