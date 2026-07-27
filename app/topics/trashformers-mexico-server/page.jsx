import TrashformersMexicoServerKeywordPage, { generateMetadata } from './trashformers-mexico-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersMexicoServerKeywordPage />;
}
