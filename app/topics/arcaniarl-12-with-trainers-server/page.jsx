import Arcaniarl12WithTrainersServerKeywordPage, { generateMetadata } from './arcaniarl-12-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Arcaniarl12WithTrainersServerKeywordPage />;
}
