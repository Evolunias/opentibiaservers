import Tibia13WithTrainersServerKeywordPage, { generateMetadata } from './tibia-13-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13WithTrainersServerKeywordPage />;
}
