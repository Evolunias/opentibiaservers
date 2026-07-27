import AureraGlobalTrainingKeywordPage, { generateMetadata } from './aurera-global-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobalTrainingKeywordPage />;
}
