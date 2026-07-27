import Canob14WithTrainersServerKeywordPage, { generateMetadata } from './canob-14-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob14WithTrainersServerKeywordPage />;
}
