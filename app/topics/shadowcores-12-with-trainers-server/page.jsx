import Shadowcores12WithTrainersServerKeywordPage, { generateMetadata } from './shadowcores-12-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores12WithTrainersServerKeywordPage />;
}
