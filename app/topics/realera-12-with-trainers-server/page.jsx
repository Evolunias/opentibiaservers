import Realera12WithTrainersServerKeywordPage, { generateMetadata } from './realera-12-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera12WithTrainersServerKeywordPage />;
}
