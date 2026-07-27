import Classicus86WithTrainersServerKeywordPage, { generateMetadata } from './classicus-8-6-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus86WithTrainersServerKeywordPage />;
}
