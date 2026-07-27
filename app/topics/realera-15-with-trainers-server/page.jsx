import Realera15WithTrainersServerKeywordPage, { generateMetadata } from './realera-15-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera15WithTrainersServerKeywordPage />;
}
