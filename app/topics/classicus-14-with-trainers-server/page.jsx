import Classicus14WithTrainersServerKeywordPage, { generateMetadata } from './classicus-14-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus14WithTrainersServerKeywordPage />;
}
