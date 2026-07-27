import BlazeraWithTrainersServerGermanyKeywordPage, { generateMetadata } from './blazera-with-trainers-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraWithTrainersServerGermanyKeywordPage />;
}
