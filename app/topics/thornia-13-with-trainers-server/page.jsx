import Thornia13WithTrainersServerKeywordPage, { generateMetadata } from './thornia-13-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia13WithTrainersServerKeywordPage />;
}
