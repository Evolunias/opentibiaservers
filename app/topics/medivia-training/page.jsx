import MediviaTrainingKeywordPage, { generateMetadata } from './medivia-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaTrainingKeywordPage />;
}
