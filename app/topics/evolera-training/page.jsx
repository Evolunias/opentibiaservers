import EvoleraTrainingKeywordPage, { generateMetadata } from './evolera-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraTrainingKeywordPage />;
}
