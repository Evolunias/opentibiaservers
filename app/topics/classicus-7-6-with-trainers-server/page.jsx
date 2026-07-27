import Classicus76WithTrainersServerKeywordPage, { generateMetadata } from './classicus-7-6-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus76WithTrainersServerKeywordPage />;
}
