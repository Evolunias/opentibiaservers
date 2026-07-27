import Kasteria11WithTrainersServerKeywordPage, { generateMetadata } from './kasteria-11-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria11WithTrainersServerKeywordPage />;
}
