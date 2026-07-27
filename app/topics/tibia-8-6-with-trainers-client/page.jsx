import Tibia86WithTrainersClientKeywordPage, { generateMetadata } from './tibia-8-6-with-trainers-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86WithTrainersClientKeywordPage />;
}
