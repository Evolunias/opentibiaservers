import Tibiame15WithTrainersServerKeywordPage, { generateMetadata } from './tibiame-15-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame15WithTrainersServerKeywordPage />;
}
