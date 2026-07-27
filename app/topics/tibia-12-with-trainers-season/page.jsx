import Tibia12WithTrainersSeasonKeywordPage, { generateMetadata } from './tibia-12-with-trainers-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithTrainersSeasonKeywordPage />;
}
