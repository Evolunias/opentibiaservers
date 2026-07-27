import Tibia11WithTrainersServersKeywordPage, { generateMetadata } from './tibia-11-with-trainers-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithTrainersServersKeywordPage />;
}
