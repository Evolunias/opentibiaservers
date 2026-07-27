import Trashformers14WithTrainersServerKeywordPage, { generateMetadata } from './trashformers-14-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Trashformers14WithTrainersServerKeywordPage />;
}
