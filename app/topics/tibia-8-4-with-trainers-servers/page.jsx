import Tibia84WithTrainersServersKeywordPage, { generateMetadata } from './tibia-8-4-with-trainers-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84WithTrainersServersKeywordPage />;
}
