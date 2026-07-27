import Canob13WithTrainersServerKeywordPage, { generateMetadata } from './canob-13-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob13WithTrainersServerKeywordPage />;
}
