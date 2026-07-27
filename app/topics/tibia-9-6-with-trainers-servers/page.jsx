import Tibia96WithTrainersServersKeywordPage, { generateMetadata } from './tibia-9-6-with-trainers-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96WithTrainersServersKeywordPage />;
}
