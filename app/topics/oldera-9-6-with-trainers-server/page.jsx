import Oldera96WithTrainersServerKeywordPage, { generateMetadata } from './oldera-9-6-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera96WithTrainersServerKeywordPage />;
}
