import Tibia14WithTrainersOtServerKeywordPage, { generateMetadata } from './tibia-14-with-trainers-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14WithTrainersOtServerKeywordPage />;
}
