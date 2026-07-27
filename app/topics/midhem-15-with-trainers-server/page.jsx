import Midhem15WithTrainersServerKeywordPage, { generateMetadata } from './midhem-15-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem15WithTrainersServerKeywordPage />;
}
