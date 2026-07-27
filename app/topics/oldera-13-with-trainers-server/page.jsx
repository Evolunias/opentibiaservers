import Oldera13WithTrainersServerKeywordPage, { generateMetadata } from './oldera-13-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera13WithTrainersServerKeywordPage />;
}
