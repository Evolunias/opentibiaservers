import Classicus96WithTrainersServerKeywordPage, { generateMetadata } from './classicus-9-6-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus96WithTrainersServerKeywordPage />;
}
