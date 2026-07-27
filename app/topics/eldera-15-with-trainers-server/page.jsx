import Eldera15WithTrainersServerKeywordPage, { generateMetadata } from './eldera-15-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera15WithTrainersServerKeywordPage />;
}
