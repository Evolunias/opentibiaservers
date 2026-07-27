import Tibiascape80WithTrainersServerKeywordPage, { generateMetadata } from './tibiascape-8-0-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape80WithTrainersServerKeywordPage />;
}
