import Venoreot15WithTrainersServerKeywordPage, { generateMetadata } from './venoreot-15-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot15WithTrainersServerKeywordPage />;
}
