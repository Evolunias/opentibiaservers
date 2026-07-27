import Ameria13WithTrainersServerKeywordPage, { generateMetadata } from './ameria-13-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria13WithTrainersServerKeywordPage />;
}
