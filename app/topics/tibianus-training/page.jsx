import TibianusTrainingKeywordPage, { generateMetadata } from './tibianus-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusTrainingKeywordPage />;
}
