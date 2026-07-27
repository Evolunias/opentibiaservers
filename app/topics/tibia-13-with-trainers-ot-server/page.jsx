import Tibia13WithTrainersOtServerKeywordPage, { generateMetadata } from './tibia-13-with-trainers-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13WithTrainersOtServerKeywordPage />;
}
