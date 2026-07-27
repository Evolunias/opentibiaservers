import Tibiame14WithTrainersServerKeywordPage, { generateMetadata } from './tibiame-14-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame14WithTrainersServerKeywordPage />;
}
