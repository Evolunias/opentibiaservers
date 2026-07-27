import Miracle13WithTrainersServerKeywordPage, { generateMetadata } from './miracle-13-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle13WithTrainersServerKeywordPage />;
}
