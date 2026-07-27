import Tibia71WithTrainersClientKeywordPage, { generateMetadata } from './tibia-7-1-with-trainers-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71WithTrainersClientKeywordPage />;
}
