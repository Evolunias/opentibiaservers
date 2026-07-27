import Shadowcores14WithTrainersServerKeywordPage, { generateMetadata } from './shadowcores-14-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores14WithTrainersServerKeywordPage />;
}
