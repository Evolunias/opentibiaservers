import Tibiascape14WithTrainersServerKeywordPage, { generateMetadata } from './tibiascape-14-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiascape14WithTrainersServerKeywordPage />;
}
