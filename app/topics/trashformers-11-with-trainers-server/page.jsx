import Trashformers11WithTrainersServerKeywordPage, { generateMetadata } from './trashformers-11-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Trashformers11WithTrainersServerKeywordPage />;
}
