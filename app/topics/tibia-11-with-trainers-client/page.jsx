import Tibia11WithTrainersClientKeywordPage, { generateMetadata } from './tibia-11-with-trainers-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithTrainersClientKeywordPage />;
}
