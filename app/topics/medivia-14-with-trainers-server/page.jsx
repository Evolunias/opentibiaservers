import Medivia14WithTrainersServerKeywordPage, { generateMetadata } from './medivia-14-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia14WithTrainersServerKeywordPage />;
}
