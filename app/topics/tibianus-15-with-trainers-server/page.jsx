import Tibianus15WithTrainersServerKeywordPage, { generateMetadata } from './tibianus-15-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus15WithTrainersServerKeywordPage />;
}
