import BlazeraWithTrainersServerSwedenKeywordPage, { generateMetadata } from './blazera-with-trainers-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraWithTrainersServerSwedenKeywordPage />;
}
