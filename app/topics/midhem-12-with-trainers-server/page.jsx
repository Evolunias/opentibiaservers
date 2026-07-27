import Midhem12WithTrainersServerKeywordPage, { generateMetadata } from './midhem-12-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem12WithTrainersServerKeywordPage />;
}
