import Thornia15WithTrainersServerKeywordPage, { generateMetadata } from './thornia-15-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia15WithTrainersServerKeywordPage />;
}
