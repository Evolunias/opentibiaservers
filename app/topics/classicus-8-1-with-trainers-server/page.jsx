import Classicus81WithTrainersServerKeywordPage, { generateMetadata } from './classicus-8-1-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus81WithTrainersServerKeywordPage />;
}
