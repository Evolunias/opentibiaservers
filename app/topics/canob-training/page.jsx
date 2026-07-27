import CanobTrainingKeywordPage, { generateMetadata } from './canob-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobTrainingKeywordPage />;
}
