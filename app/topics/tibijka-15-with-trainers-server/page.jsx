import Tibijka15WithTrainersServerKeywordPage, { generateMetadata } from './tibijka-15-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka15WithTrainersServerKeywordPage />;
}
