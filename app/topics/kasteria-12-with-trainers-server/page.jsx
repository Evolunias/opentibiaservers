import Kasteria12WithTrainersServerKeywordPage, { generateMetadata } from './kasteria-12-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria12WithTrainersServerKeywordPage />;
}
