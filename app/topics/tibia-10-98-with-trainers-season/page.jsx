import Tibia1098WithTrainersSeasonKeywordPage, { generateMetadata } from './tibia-10-98-with-trainers-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098WithTrainersSeasonKeywordPage />;
}
