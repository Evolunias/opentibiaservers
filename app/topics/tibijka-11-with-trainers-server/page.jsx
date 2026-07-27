import Tibijka11WithTrainersServerKeywordPage, { generateMetadata } from './tibijka-11-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka11WithTrainersServerKeywordPage />;
}
