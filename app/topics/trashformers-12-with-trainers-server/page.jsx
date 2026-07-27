import Trashformers12WithTrainersServerKeywordPage, { generateMetadata } from './trashformers-12-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Trashformers12WithTrainersServerKeywordPage />;
}
