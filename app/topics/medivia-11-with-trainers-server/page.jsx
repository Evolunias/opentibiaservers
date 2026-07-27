import Medivia11WithTrainersServerKeywordPage, { generateMetadata } from './medivia-11-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia11WithTrainersServerKeywordPage />;
}
