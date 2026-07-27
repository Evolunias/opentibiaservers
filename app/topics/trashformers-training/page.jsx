import TrashformersTrainingKeywordPage, { generateMetadata } from './trashformers-training';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersTrainingKeywordPage />;
}
