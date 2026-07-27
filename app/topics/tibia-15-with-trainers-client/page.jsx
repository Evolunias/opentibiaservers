import Tibia15WithTrainersClientKeywordPage, { generateMetadata } from './tibia-15-with-trainers-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15WithTrainersClientKeywordPage />;
}
