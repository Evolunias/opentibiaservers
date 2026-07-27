import Trashformers15WithTrainersServerKeywordPage, { generateMetadata } from './trashformers-15-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Trashformers15WithTrainersServerKeywordPage />;
}
