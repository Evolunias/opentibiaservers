import MadnessaliveTrainingKeywordPage, { generateMetadata } from './madnessalive-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveTrainingKeywordPage />;
}
