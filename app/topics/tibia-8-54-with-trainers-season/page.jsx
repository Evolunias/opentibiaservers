import Tibia854WithTrainersSeasonKeywordPage, { generateMetadata } from './tibia-8-54-with-trainers-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia854WithTrainersSeasonKeywordPage />;
}
