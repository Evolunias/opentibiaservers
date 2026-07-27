import Otmadness13WithTrainersServerKeywordPage, { generateMetadata } from './otmadness-13-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Otmadness13WithTrainersServerKeywordPage />;
}
