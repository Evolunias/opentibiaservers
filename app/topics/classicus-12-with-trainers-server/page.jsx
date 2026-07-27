import Classicus12WithTrainersServerKeywordPage, { generateMetadata } from './classicus-12-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus12WithTrainersServerKeywordPage />;
}
