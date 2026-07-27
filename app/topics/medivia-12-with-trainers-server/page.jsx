import Medivia12WithTrainersServerKeywordPage, { generateMetadata } from './medivia-12-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia12WithTrainersServerKeywordPage />;
}
