import Tibia76WithTrainersServerKeywordPage, { generateMetadata } from './tibia-7-6-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76WithTrainersServerKeywordPage />;
}
