import Ameria12WithTrainersServerKeywordPage, { generateMetadata } from './ameria-12-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria12WithTrainersServerKeywordPage />;
}
