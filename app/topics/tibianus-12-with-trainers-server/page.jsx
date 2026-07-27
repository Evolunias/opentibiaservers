import Tibianus12WithTrainersServerKeywordPage, { generateMetadata } from './tibianus-12-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus12WithTrainersServerKeywordPage />;
}
