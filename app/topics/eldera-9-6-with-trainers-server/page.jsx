import Eldera96WithTrainersServerKeywordPage, { generateMetadata } from './eldera-9-6-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera96WithTrainersServerKeywordPage />;
}
