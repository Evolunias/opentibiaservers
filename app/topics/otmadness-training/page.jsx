import OtmadnessTrainingKeywordPage, { generateMetadata } from './otmadness-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtmadnessTrainingKeywordPage />;
}
