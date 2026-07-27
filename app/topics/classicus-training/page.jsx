import ClassicusTrainingKeywordPage, { generateMetadata } from './classicus-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ClassicusTrainingKeywordPage />;
}
