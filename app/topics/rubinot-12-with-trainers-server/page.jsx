import Rubinot12WithTrainersServerKeywordPage, { generateMetadata } from './rubinot-12-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot12WithTrainersServerKeywordPage />;
}
