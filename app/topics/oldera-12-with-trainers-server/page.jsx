import Oldera12WithTrainersServerKeywordPage, { generateMetadata } from './oldera-12-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera12WithTrainersServerKeywordPage />;
}
