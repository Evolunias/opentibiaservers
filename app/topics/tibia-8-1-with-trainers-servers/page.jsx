import Tibia81WithTrainersServersKeywordPage, { generateMetadata } from './tibia-8-1-with-trainers-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81WithTrainersServersKeywordPage />;
}
