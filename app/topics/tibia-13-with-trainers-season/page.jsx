import Tibia13WithTrainersSeasonKeywordPage, { generateMetadata } from './tibia-13-with-trainers-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13WithTrainersSeasonKeywordPage />;
}
