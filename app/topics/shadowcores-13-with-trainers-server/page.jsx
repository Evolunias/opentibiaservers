import Shadowcores13WithTrainersServerKeywordPage, { generateMetadata } from './shadowcores-13-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores13WithTrainersServerKeywordPage />;
}
