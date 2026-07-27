import Tibiascape11WithTrainersServerKeywordPage, { generateMetadata } from './tibiascape-11-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape11WithTrainersServerKeywordPage />;
}
