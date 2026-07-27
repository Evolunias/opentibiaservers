import Tibia80WithTrainersServersKeywordPage, { generateMetadata } from './tibia-8-0-with-trainers-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80WithTrainersServersKeywordPage />;
}
