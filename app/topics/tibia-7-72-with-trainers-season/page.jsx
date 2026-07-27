import Tibia772WithTrainersSeasonKeywordPage, { generateMetadata } from './tibia-7-72-with-trainers-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772WithTrainersSeasonKeywordPage />;
}
