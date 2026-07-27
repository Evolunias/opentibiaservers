import Tibiantis11WithTrainersServerKeywordPage, { generateMetadata } from './tibiantis-11-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiantis11WithTrainersServerKeywordPage />;
}
