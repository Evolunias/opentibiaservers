import Classicus80WithTrainersServerKeywordPage, { generateMetadata } from './classicus-8-0-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus80WithTrainersServerKeywordPage />;
}
