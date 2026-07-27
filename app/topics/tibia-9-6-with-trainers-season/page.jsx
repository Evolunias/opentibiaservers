import Tibia96WithTrainersSeasonKeywordPage, { generateMetadata } from './tibia-9-6-with-trainers-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96WithTrainersSeasonKeywordPage />;
}
