import Tibia76WithTrainersSeasonKeywordPage, { generateMetadata } from './tibia-7-6-with-trainers-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76WithTrainersSeasonKeywordPage />;
}
