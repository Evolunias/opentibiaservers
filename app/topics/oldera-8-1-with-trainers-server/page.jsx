import Oldera81WithTrainersServerKeywordPage, { generateMetadata } from './oldera-8-1-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera81WithTrainersServerKeywordPage />;
}
