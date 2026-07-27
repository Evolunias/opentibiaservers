import MidhemTrainingKeywordPage, { generateMetadata } from './midhem-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MidhemTrainingKeywordPage />;
}
