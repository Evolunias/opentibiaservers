import Tibia15WithTrainersServersKeywordPage, { generateMetadata } from './tibia-15-with-trainers-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15WithTrainersServersKeywordPage />;
}
