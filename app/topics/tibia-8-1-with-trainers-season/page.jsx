import Tibia81WithTrainersSeasonKeywordPage, { generateMetadata } from './tibia-8-1-with-trainers-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81WithTrainersSeasonKeywordPage />;
}
