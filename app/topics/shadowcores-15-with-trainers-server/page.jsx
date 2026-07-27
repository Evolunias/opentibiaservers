import Shadowcores15WithTrainersServerKeywordPage, { generateMetadata } from './shadowcores-15-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores15WithTrainersServerKeywordPage />;
}
