import TrashformersAlternativesKeywordPage, { generateMetadata } from './trashformers-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersAlternativesKeywordPage />;
}
