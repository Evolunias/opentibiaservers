import Tibia80WithTrainersServerKeywordPage, { generateMetadata } from './tibia-8-0-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithTrainersServerKeywordPage />;
}
