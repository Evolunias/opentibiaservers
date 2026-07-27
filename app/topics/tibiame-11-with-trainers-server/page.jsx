import Tibiame11WithTrainersServerKeywordPage, { generateMetadata } from './tibiame-11-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame11WithTrainersServerKeywordPage />;
}
