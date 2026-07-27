import Oldera15WithTrainersServerKeywordPage, { generateMetadata } from './oldera-15-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera15WithTrainersServerKeywordPage />;
}
