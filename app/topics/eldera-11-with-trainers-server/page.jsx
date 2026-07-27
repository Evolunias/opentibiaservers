import Eldera11WithTrainersServerKeywordPage, { generateMetadata } from './eldera-11-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera11WithTrainersServerKeywordPage />;
}
