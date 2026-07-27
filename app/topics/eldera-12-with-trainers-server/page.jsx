import Eldera12WithTrainersServerKeywordPage, { generateMetadata } from './eldera-12-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera12WithTrainersServerKeywordPage />;
}
