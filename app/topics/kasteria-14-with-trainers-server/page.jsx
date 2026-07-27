import Kasteria14WithTrainersServerKeywordPage, { generateMetadata } from './kasteria-14-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria14WithTrainersServerKeywordPage />;
}
