import Oldera71WithTrainersServerKeywordPage, { generateMetadata } from './oldera-7-1-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera71WithTrainersServerKeywordPage />;
}
