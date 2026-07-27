import TibijkaTrainingKeywordPage, { generateMetadata } from './tibijka-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaTrainingKeywordPage />;
}
