import Ameria15WithTrainersServerKeywordPage, { generateMetadata } from './ameria-15-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria15WithTrainersServerKeywordPage />;
}
