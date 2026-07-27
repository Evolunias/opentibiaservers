import Kasteria96WithTrainersServerKeywordPage, { generateMetadata } from './kasteria-9-6-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria96WithTrainersServerKeywordPage />;
}
