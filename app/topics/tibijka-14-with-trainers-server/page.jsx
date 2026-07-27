import Tibijka14WithTrainersServerKeywordPage, { generateMetadata } from './tibijka-14-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka14WithTrainersServerKeywordPage />;
}
