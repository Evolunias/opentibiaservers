import Venoreot14WithTrainersServerKeywordPage, { generateMetadata } from './venoreot-14-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot14WithTrainersServerKeywordPage />;
}
