import Tibia12WithTrainersServersKeywordPage, { generateMetadata } from './tibia-12-with-trainers-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12WithTrainersServersKeywordPage />;
}
