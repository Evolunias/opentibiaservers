import Thaisot81WithTrainersServerKeywordPage, { generateMetadata } from './thaisot-8-1-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot81WithTrainersServerKeywordPage />;
}
