import Tibia81WithTrainersServerKeywordPage, { generateMetadata } from './tibia-8-1-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81WithTrainersServerKeywordPage />;
}
