import Tibia12WithTrainersOtServerKeywordPage, { generateMetadata } from './tibia-12-with-trainers-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithTrainersOtServerKeywordPage />;
}
