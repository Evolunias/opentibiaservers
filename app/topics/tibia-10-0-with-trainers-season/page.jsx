import Tibia100WithTrainersSeasonKeywordPage, { generateMetadata } from './tibia-10-0-with-trainers-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100WithTrainersSeasonKeywordPage />;
}
