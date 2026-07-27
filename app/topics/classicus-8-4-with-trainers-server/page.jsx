import Classicus84WithTrainersServerKeywordPage, { generateMetadata } from './classicus-8-4-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus84WithTrainersServerKeywordPage />;
}
