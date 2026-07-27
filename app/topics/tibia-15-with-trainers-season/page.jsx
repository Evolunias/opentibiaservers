import Tibia15WithTrainersSeasonKeywordPage, { generateMetadata } from './tibia-15-with-trainers-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15WithTrainersSeasonKeywordPage />;
}
