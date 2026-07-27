import EvoTrashformersServerKeywordPage, { generateMetadata } from './evo-trashformers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoTrashformersServerKeywordPage />;
}
