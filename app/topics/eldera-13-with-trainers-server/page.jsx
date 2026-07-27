import Eldera13WithTrainersServerKeywordPage, { generateMetadata } from './eldera-13-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera13WithTrainersServerKeywordPage />;
}
