import TibiascapeTrainingKeywordPage, { generateMetadata } from './tibiascape-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeTrainingKeywordPage />;
}
