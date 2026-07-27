import Classicus100WithTrainersServerKeywordPage, { generateMetadata } from './classicus-10-0-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus100WithTrainersServerKeywordPage />;
}
