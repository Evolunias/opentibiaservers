import Tibia86WithTrainersSeasonKeywordPage, { generateMetadata } from './tibia-8-6-with-trainers-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86WithTrainersSeasonKeywordPage />;
}
