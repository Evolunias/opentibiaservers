import TrashformersSimilarServersKeywordPage, { generateMetadata } from './trashformers-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersSimilarServersKeywordPage />;
}
