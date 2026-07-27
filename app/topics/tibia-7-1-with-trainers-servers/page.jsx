import Tibia71WithTrainersServersKeywordPage, { generateMetadata } from './tibia-7-1-with-trainers-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71WithTrainersServersKeywordPage />;
}
