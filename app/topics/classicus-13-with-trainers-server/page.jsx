import Classicus13WithTrainersServerKeywordPage, { generateMetadata } from './classicus-13-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus13WithTrainersServerKeywordPage />;
}
