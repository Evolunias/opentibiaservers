import Midhem13WithTrainersServerKeywordPage, { generateMetadata } from './midhem-13-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem13WithTrainersServerKeywordPage />;
}
