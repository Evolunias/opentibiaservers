import Tibijka13WithTrainersServerKeywordPage, { generateMetadata } from './tibijka-13-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka13WithTrainersServerKeywordPage />;
}
