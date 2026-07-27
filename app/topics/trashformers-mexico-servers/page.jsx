import TrashformersMexicoServersKeywordPage, { generateMetadata } from './trashformers-mexico-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersMexicoServersKeywordPage />;
}
