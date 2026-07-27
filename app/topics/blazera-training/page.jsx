import BlazeraTrainingKeywordPage, { generateMetadata } from './blazera-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraTrainingKeywordPage />;
}
