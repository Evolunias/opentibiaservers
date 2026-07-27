import Tibia80WithTrainersClientKeywordPage, { generateMetadata } from './tibia-8-0-with-trainers-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithTrainersClientKeywordPage />;
}
