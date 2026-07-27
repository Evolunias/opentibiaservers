import Thornia86WithTrainersServerKeywordPage, { generateMetadata } from './thornia-8-6-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia86WithTrainersServerKeywordPage />;
}
