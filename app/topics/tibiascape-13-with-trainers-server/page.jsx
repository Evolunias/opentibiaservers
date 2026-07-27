import Tibiascape13WithTrainersServerKeywordPage, { generateMetadata } from './tibiascape-13-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape13WithTrainersServerKeywordPage />;
}
