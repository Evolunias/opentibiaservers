import Rubinot13WithTrainersServerKeywordPage, { generateMetadata } from './rubinot-13-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot13WithTrainersServerKeywordPage />;
}
