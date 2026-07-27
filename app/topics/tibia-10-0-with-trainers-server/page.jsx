import Tibia100WithTrainersServerKeywordPage, { generateMetadata } from './tibia-10-0-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100WithTrainersServerKeywordPage />;
}
