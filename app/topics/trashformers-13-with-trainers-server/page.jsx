import Trashformers13WithTrainersServerKeywordPage, { generateMetadata } from './trashformers-13-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Trashformers13WithTrainersServerKeywordPage />;
}
