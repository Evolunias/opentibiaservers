import Medivia15WithTrainersServerKeywordPage, { generateMetadata } from './medivia-15-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia15WithTrainersServerKeywordPage />;
}
