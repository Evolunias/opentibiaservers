import Thornia12WithTrainersServerKeywordPage, { generateMetadata } from './thornia-12-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia12WithTrainersServerKeywordPage />;
}
