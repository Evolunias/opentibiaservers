import Tibia14WithTrainersServersKeywordPage, { generateMetadata } from './tibia-14-with-trainers-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14WithTrainersServersKeywordPage />;
}
