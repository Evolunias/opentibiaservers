import Tibia13WithTrainersServersKeywordPage, { generateMetadata } from './tibia-13-with-trainers-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13WithTrainersServersKeywordPage />;
}
