import MistOfDeathTrainingKeywordPage, { generateMetadata } from './mist-of-death-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathTrainingKeywordPage />;
}
