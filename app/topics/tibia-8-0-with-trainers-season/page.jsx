import Tibia80WithTrainersSeasonKeywordPage, { generateMetadata } from './tibia-8-0-with-trainers-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithTrainersSeasonKeywordPage />;
}
