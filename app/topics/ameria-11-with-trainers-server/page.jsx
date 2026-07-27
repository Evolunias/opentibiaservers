import Ameria11WithTrainersServerKeywordPage, { generateMetadata } from './ameria-11-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria11WithTrainersServerKeywordPage />;
}
