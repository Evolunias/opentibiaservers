import Thornia80WithTrainersServerKeywordPage, { generateMetadata } from './thornia-8-0-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia80WithTrainersServerKeywordPage />;
}
