import Thaisot86WithTrainersServerKeywordPage, { generateMetadata } from './thaisot-8-6-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot86WithTrainersServerKeywordPage />;
}
