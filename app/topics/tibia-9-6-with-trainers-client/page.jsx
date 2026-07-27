import Tibia96WithTrainersClientKeywordPage, { generateMetadata } from './tibia-9-6-with-trainers-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96WithTrainersClientKeywordPage />;
}
