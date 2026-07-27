import Oldera14WithTrainersServerKeywordPage, { generateMetadata } from './oldera-14-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera14WithTrainersServerKeywordPage />;
}
