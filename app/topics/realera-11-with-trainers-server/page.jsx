import Realera11WithTrainersServerKeywordPage, { generateMetadata } from './realera-11-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera11WithTrainersServerKeywordPage />;
}
