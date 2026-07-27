import Tibia12WithTrainersClientKeywordPage, { generateMetadata } from './tibia-12-with-trainers-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithTrainersClientKeywordPage />;
}
