import Thaisot71WithTrainersServerKeywordPage, { generateMetadata } from './thaisot-7-1-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot71WithTrainersServerKeywordPage />;
}
