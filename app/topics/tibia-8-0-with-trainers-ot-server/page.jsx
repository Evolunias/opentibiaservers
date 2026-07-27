import Tibia80WithTrainersOtServerKeywordPage, { generateMetadata } from './tibia-8-0-with-trainers-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithTrainersOtServerKeywordPage />;
}
