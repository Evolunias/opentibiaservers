import Canob11WithTrainersServerKeywordPage, { generateMetadata } from './canob-11-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob11WithTrainersServerKeywordPage />;
}
