import Tibia81WithTrainersOtServerKeywordPage, { generateMetadata } from './tibia-8-1-with-trainers-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81WithTrainersOtServerKeywordPage />;
}
