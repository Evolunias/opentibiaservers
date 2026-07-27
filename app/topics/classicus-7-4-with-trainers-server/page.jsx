import Classicus74WithTrainersServerKeywordPage, { generateMetadata } from './classicus-7-4-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus74WithTrainersServerKeywordPage />;
}
