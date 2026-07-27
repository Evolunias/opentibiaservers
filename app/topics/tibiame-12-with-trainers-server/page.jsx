import Tibiame12WithTrainersServerKeywordPage, { generateMetadata } from './tibiame-12-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame12WithTrainersServerKeywordPage />;
}
