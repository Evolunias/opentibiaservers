import Thornia84WithTrainersServerKeywordPage, { generateMetadata } from './thornia-8-4-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia84WithTrainersServerKeywordPage />;
}
