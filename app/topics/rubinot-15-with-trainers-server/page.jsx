import Rubinot15WithTrainersServerKeywordPage, { generateMetadata } from './rubinot-15-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot15WithTrainersServerKeywordPage />;
}
