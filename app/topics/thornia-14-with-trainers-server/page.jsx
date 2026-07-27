import Thornia14WithTrainersServerKeywordPage, { generateMetadata } from './thornia-14-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia14WithTrainersServerKeywordPage />;
}
