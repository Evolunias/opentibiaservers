import Tibiascape15WithTrainersServerKeywordPage, { generateMetadata } from './tibiascape-15-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape15WithTrainersServerKeywordPage />;
}
