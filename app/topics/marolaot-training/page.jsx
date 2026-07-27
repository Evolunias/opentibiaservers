import MarolaotTrainingKeywordPage, { generateMetadata } from './marolaot-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MarolaotTrainingKeywordPage />;
}
