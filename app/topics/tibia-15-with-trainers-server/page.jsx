import Tibia15WithTrainersServerKeywordPage, { generateMetadata } from './tibia-15-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15WithTrainersServerKeywordPage />;
}
