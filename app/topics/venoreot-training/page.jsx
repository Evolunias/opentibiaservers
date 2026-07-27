import VenoreotTrainingKeywordPage, { generateMetadata } from './venoreot-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VenoreotTrainingKeywordPage />;
}
