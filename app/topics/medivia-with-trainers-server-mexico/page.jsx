import MediviaWithTrainersServerMexicoKeywordPage, { generateMetadata } from './medivia-with-trainers-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaWithTrainersServerMexicoKeywordPage />;
}
