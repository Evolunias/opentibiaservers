import Canob12WithTrainersServerKeywordPage, { generateMetadata } from './canob-12-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob12WithTrainersServerKeywordPage />;
}
