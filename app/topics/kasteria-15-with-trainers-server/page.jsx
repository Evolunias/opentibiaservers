import Kasteria15WithTrainersServerKeywordPage, { generateMetadata } from './kasteria-15-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria15WithTrainersServerKeywordPage />;
}
