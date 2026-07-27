import Tibia96WithTrainersOtServerKeywordPage, { generateMetadata } from './tibia-9-6-with-trainers-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96WithTrainersOtServerKeywordPage />;
}
