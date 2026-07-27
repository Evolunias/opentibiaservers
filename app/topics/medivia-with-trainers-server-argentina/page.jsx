import MediviaWithTrainersServerArgentinaKeywordPage, { generateMetadata } from './medivia-with-trainers-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaWithTrainersServerArgentinaKeywordPage />;
}
