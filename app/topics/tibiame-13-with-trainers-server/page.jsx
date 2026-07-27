import Tibiame13WithTrainersServerKeywordPage, { generateMetadata } from './tibiame-13-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame13WithTrainersServerKeywordPage />;
}
