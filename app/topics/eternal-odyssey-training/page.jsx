import EternalOdysseyTrainingKeywordPage, { generateMetadata } from './eternal-odyssey-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EternalOdysseyTrainingKeywordPage />;
}
