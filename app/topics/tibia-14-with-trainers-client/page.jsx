import Tibia14WithTrainersClientKeywordPage, { generateMetadata } from './tibia-14-with-trainers-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14WithTrainersClientKeywordPage />;
}
