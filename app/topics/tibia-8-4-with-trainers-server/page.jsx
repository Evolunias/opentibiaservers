import Tibia84WithTrainersServerKeywordPage, { generateMetadata } from './tibia-8-4-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84WithTrainersServerKeywordPage />;
}
