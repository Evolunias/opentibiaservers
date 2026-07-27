import Tibia100WithTrainersClientKeywordPage, { generateMetadata } from './tibia-10-0-with-trainers-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100WithTrainersClientKeywordPage />;
}
