import Classicus15WithTrainersServerKeywordPage, { generateMetadata } from './classicus-15-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus15WithTrainersServerKeywordPage />;
}
