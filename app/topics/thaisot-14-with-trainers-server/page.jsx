import Thaisot14WithTrainersServerKeywordPage, { generateMetadata } from './thaisot-14-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot14WithTrainersServerKeywordPage />;
}
