import UnlineTrainingKeywordPage, { generateMetadata } from './unline-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineTrainingKeywordPage />;
}
