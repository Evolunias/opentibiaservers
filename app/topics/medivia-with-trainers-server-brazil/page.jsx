import MediviaWithTrainersServerBrazilKeywordPage, { generateMetadata } from './medivia-with-trainers-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaWithTrainersServerBrazilKeywordPage />;
}
