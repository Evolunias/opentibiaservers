import Tibia86WithTrainersServersKeywordPage, { generateMetadata } from './tibia-8-6-with-trainers-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86WithTrainersServersKeywordPage />;
}
