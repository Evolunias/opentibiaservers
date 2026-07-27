import Oldera11WithTrainersServerKeywordPage, { generateMetadata } from './oldera-11-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera11WithTrainersServerKeywordPage />;
}
