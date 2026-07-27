import EvoTrashformersServersKeywordPage, { generateMetadata } from './evo-trashformers-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoTrashformersServersKeywordPage />;
}
