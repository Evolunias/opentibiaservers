import ThaisotTrainingKeywordPage, { generateMetadata } from './thaisot-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThaisotTrainingKeywordPage />;
}
