import TibiantisTrainingKeywordPage, { generateMetadata } from './tibiantis-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisTrainingKeywordPage />;
}
