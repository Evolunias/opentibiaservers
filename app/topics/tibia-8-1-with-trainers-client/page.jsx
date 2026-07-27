import Tibia81WithTrainersClientKeywordPage, { generateMetadata } from './tibia-8-1-with-trainers-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81WithTrainersClientKeywordPage />;
}
