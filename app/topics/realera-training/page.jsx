import RealeraTrainingKeywordPage, { generateMetadata } from './realera-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraTrainingKeywordPage />;
}
