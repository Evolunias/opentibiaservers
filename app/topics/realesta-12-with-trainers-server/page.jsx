import Realesta12WithTrainersServerKeywordPage, { generateMetadata } from './realesta-12-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realesta12WithTrainersServerKeywordPage />;
}
