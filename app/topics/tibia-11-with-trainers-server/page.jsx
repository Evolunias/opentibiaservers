import Tibia11WithTrainersServerKeywordPage, { generateMetadata } from './tibia-11-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11WithTrainersServerKeywordPage />;
}
