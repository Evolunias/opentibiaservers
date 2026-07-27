import Tibia14WithTrainersServerKeywordPage, { generateMetadata } from './tibia-14-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14WithTrainersServerKeywordPage />;
}
