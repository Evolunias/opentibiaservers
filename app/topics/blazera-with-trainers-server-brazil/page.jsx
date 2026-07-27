import BlazeraWithTrainersServerBrazilKeywordPage, { generateMetadata } from './blazera-with-trainers-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraWithTrainersServerBrazilKeywordPage />;
}
