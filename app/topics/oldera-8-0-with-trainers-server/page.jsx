import Oldera80WithTrainersServerKeywordPage, { generateMetadata } from './oldera-8-0-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera80WithTrainersServerKeywordPage />;
}
