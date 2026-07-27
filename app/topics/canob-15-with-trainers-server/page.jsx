import Canob15WithTrainersServerKeywordPage, { generateMetadata } from './canob-15-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob15WithTrainersServerKeywordPage />;
}
