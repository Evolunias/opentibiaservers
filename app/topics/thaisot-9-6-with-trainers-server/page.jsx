import Thaisot96WithTrainersServerKeywordPage, { generateMetadata } from './thaisot-9-6-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot96WithTrainersServerKeywordPage />;
}
