import RealestaTrainingKeywordPage, { generateMetadata } from './realesta-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaTrainingKeywordPage />;
}
