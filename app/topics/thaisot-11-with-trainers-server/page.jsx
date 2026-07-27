import Thaisot11WithTrainersServerKeywordPage, { generateMetadata } from './thaisot-11-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot11WithTrainersServerKeywordPage />;
}
