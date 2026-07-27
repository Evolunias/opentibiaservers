import Tibia13WithTrainersClientKeywordPage, { generateMetadata } from './tibia-13-with-trainers-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13WithTrainersClientKeywordPage />;
}
