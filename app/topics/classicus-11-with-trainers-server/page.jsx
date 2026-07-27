import Classicus11WithTrainersServerKeywordPage, { generateMetadata } from './classicus-11-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus11WithTrainersServerKeywordPage />;
}
