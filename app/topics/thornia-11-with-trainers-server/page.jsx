import Thornia11WithTrainersServerKeywordPage, { generateMetadata } from './thornia-11-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia11WithTrainersServerKeywordPage />;
}
