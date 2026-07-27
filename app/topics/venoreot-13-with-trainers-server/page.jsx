import Venoreot13WithTrainersServerKeywordPage, { generateMetadata } from './venoreot-13-with-trainers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Venoreot13WithTrainersServerKeywordPage />;
}
