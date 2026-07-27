import Medivia96WithTrainersServerKeywordPage, { generateMetadata } from './medivia-9-6-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia96WithTrainersServerKeywordPage />;
}
