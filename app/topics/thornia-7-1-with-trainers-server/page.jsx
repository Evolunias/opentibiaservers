import Thornia71WithTrainersServerKeywordPage, { generateMetadata } from './thornia-7-1-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia71WithTrainersServerKeywordPage />;
}
