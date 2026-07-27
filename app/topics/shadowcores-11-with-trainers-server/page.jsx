import Shadowcores11WithTrainersServerKeywordPage, { generateMetadata } from './shadowcores-11-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores11WithTrainersServerKeywordPage />;
}
