import Tibijka12WithTrainersServerKeywordPage, { generateMetadata } from './tibijka-12-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka12WithTrainersServerKeywordPage />;
}
