import Kasteria86WithTrainersServerKeywordPage, { generateMetadata } from './kasteria-8-6-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria86WithTrainersServerKeywordPage />;
}
