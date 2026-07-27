import Tibia76WithTrainersClientKeywordPage, { generateMetadata } from './tibia-7-6-with-trainers-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76WithTrainersClientKeywordPage />;
}
