import Blazera12WithTrainersServerKeywordPage, { generateMetadata } from './blazera-12-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera12WithTrainersServerKeywordPage />;
}
