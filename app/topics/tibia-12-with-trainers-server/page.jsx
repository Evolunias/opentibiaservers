import Tibia12WithTrainersServerKeywordPage, { generateMetadata } from './tibia-12-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithTrainersServerKeywordPage />;
}
