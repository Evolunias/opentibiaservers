import Tibianus13WithTrainersServerKeywordPage, { generateMetadata } from './tibianus-13-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus13WithTrainersServerKeywordPage />;
}
