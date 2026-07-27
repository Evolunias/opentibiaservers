import Venoreot12WithTrainersServerKeywordPage, { generateMetadata } from './venoreot-12-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot12WithTrainersServerKeywordPage />;
}
