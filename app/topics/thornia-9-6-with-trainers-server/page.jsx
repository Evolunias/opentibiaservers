import Thornia96WithTrainersServerKeywordPage, { generateMetadata } from './thornia-9-6-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia96WithTrainersServerKeywordPage />;
}
